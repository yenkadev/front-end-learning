/**
 * Throttle technique
 * 1. Throttle usages
 * 2. How it works
 * 3. Simple implementation
 */

/**
 * 1. Throttle usages
  - Usually throttle is applied to scroll to prevent calling function too many times.
 */

/**
 * 2. How it works
  - throttle = trigger max 1 call every period of time
 */
function throttle(callback, wait) {}
function log() {}
const throttleLog = throttle(log, 500);
throttleLog();
throttleLog();
throttleLog();

/**
 * 3. Simple implementation
 */
