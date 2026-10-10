export function startVisiblePolling(task: () => Promise<unknown>, intervalMs: () => number) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  let lastStartedAt = Date.now();
  let running = false;
  let stopped = false;

  function schedule() {
    clearTimeout(timer);
    if (stopped || document.hidden || running) return;
    timer = setTimeout(run, Math.max(0, intervalMs() - (Date.now() - lastStartedAt)));
  }

  async function run() {
    if (stopped || document.hidden || running) return;
    running = true;
    lastStartedAt = Date.now();
    try {
      await task();
    } catch (error) {
      console.error("Weather refresh failed", error);
    } finally {
      running = false;
      schedule();
    }
  }

  function stop() {
    stopped = true;
    clearTimeout(timer);
    document.removeEventListener("visibilitychange", schedule);
    window.removeEventListener("pagehide", stop);
  }

  document.addEventListener("visibilitychange", schedule);
  window.addEventListener("pagehide", stop, { once: true });
  schedule();
  return stop;
}
