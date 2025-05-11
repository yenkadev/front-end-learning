/**
 * Debounce technique
 * 1. Debounce usages
 * 2. How it works
 * 3. Simple implementation
 */

/**
 * 2. How it works
  - debounce = exec function after a period of time receiving no trigger.
 */
function debounce(callback, wait) {}
function log() {}
const debounceLog = debounce(log, 500);
debounceLog();
debounceLog();
debounceLog();

/**
 * 3. Simple implementation
 */
function log() {
  console.log("log");
}
function debounce(callback, wait) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, wait);
  };
}

debounce(log, 5000);
debounce(log, 5000);
debounce(log, 5000);