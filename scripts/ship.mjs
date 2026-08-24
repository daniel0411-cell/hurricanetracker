import { spawnSync } from "node:child_process";

const retryDelays = [0, 5_000, 15_000];
const gitTimeout = 60_000;

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    encoding: "utf8",
    stdio: options.capture ? "pipe" : "inherit",
    ...options,
  });

  if (result.status !== 0) {
    if (options.capture) {
      process.stderr.write(result.stderr || result.stdout || "");
    }
    process.exit(result.status ?? 1);
  }

  return options.capture ? result.stdout.trim() : "";
}

function attempt(command, args, options = {}) {
  return spawnSync(command, args, {
    cwd: process.cwd(),
    encoding: "utf8",
    stdio: options.capture ? "pipe" : "inherit",
    timeout: options.timeout,
    ...options,
  });
}

function wait(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

function remoteMainRevision() {
  const result = attempt("git", ["ls-remote", "origin", "refs/heads/main"], {
    capture: true,
    env: gitNetworkEnv,
    timeout: gitTimeout,
  });
  if (result.status !== 0) return "";
  return result.stdout.trim().split(/\s+/)[0] ?? "";
}

function retryGit(args, verify) {
  for (let index = 0; index < retryDelays.length; index += 1) {
    if (retryDelays[index]) {
      console.warn(`[ship] GitHub unavailable; retrying in ${retryDelays[index] / 1000}s (${index + 1}/${retryDelays.length}).`);
      wait(retryDelays[index]);
    }

    const result = attempt("git", args, { env: gitNetworkEnv, timeout: gitTimeout });
    if (result.status === 0 || verify?.()) return;
  }

  console.error(`[ship] GitHub operation failed after ${retryDelays.length} attempts. Cloudflare was not deployed.`);
  process.exit(1);
}

const gitNetworkEnv = {
  ...process.env,
  GIT_HTTP_LOW_SPEED_LIMIT: "1",
  GIT_HTTP_LOW_SPEED_TIME: "180",
};

const branch = run("git", ["branch", "--show-current"], { capture: true });
if (branch !== "main") {
  console.error(`[ship] Refusing to release from ${branch || "detached HEAD"}; switch to main first.`);
  process.exit(1);
}

const trackedChanges = run("git", ["status", "--porcelain", "--untracked-files=no"], { capture: true });
if (trackedChanges) {
  console.error("[ship] Uncommitted tracked changes found. Commit only the intended files before releasing.");
  process.exit(1);
}

run("npm", ["run", "build"]);

retryGit(["fetch", "origin", "main"]);

const behind = Number(run("git", ["rev-list", "--count", "HEAD..origin/main"], { capture: true }));
if (behind > 0) {
  console.error(`[ship] Local main is ${behind} commit(s) behind origin/main. Reconcile it before releasing.`);
  process.exit(1);
}

const localRevision = run("git", ["rev-parse", "HEAD"], { capture: true });
retryGit(["push", "origin", "main"], () => remoteMainRevision() === localRevision);
if (remoteMainRevision() !== localRevision) {
  console.error("[ship] GitHub main does not match local HEAD. Cloudflare was not deployed.");
  process.exit(1);
}
run("npm", ["run", "deploy"]);

const revision = run("git", ["rev-parse", "--short", "HEAD"], { capture: true });
console.log(`[ship] Released ${revision}: GitHub and Cloudflare are in sync.`);
