/**Tổng quan về lập trình bất đồng bộ
  1. Giới thiệu về lập trình bất đồng bộ`
  2. setTimeout
  3. debounce
  4. setTimeout with this
  5. setInterval
  6. throttle
*/

/**
 *                                     Single Thread     Multi Thread
  How many task performed at a time    One               Many
  Resource sharing                     No                Yes
 */
// Javascript is a single thread programming language.

/**
 * Sync and Async
  - Sync = synchronous = đồng bộ
  - Async = asynchronous = bất đồng bộ
  - Why async? --> avoid blocking main thread while processing
 */

/**
 * Blocking on browser
  # Name Desc
  1 window.alert(message): Show an alert with message
  2 window.confirm(message): Return true/false based on user click OK/Cancel
  3 window.prompt(message, default): Return value that user enter into the box
 */
window.alert("Javascript course");
console.log("Hi");

/**
 * API
 */
