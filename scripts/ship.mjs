import { spawnSync } from "node:child_process";

const commitMessage = process.argv.slice(2).join(" ").trim();

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

const branch = run("git", ["branch", "--show-current"], { capture: true });
if (branch !== "main") {
  console.error(`[ship] Refusing to release from ${branch || "detached HEAD"}; switch to main first.`);
  process.exit(1);
}

const status = run("git", ["status", "--porcelain"], { capture: true });
if (status && !commitMessage) {
  console.error('[ship] Uncommitted changes found. Run `npm run ship -- "Your commit message"` to commit them.');
  process.exit(1);
}

run("npm", ["run", "build"]);

if (status) {
  run("git", ["add", "--all"]);
  run("git", ["diff", "--cached", "--check"]);
  run("git", ["commit", "-m", commitMessage]);
}

run("git", ["fetch", "origin", "main"]);

const behind = Number(run("git", ["rev-list", "--count", "HEAD..origin/main"], { capture: true }));
if (behind > 0) {
  console.error(`[ship] Local main is ${behind} commit(s) behind origin/main. Reconcile it before releasing.`);
  process.exit(1);
}

run("git", ["push", "origin", "main"]);
run("npm", ["run", "deploy"]);

const revision = run("git", ["rev-parse", "--short", "HEAD"], { capture: true });
console.log(`[ship] Released ${revision}: GitHub and Cloudflare are in sync.`);
