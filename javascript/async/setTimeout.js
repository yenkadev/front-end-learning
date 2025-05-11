/**
 * setTimeout(callback, timeout)
 * 1. setTimeout overview
 * 2. clearTimeout
 * 3. Late timeout
 */

/**
 * 1. setTimeout overview
  - What: a global method to set a timer, then exec a function when the timer is expired.
  - When: you want to run a function after a period of time.
  - Where: working on both browser + nodejs
 */
const timeoutId = setTimeout(callback, timeout);
// callback is the function will be executed once the timer is expired
// timeout is the time in milliseconds, default to 0. 1 second = 1000
milliseconds;
// timeoutId is a positive integer, used to identify a timeout
// and clear it by using clearTimeout(timeoutId)

function sayHello() {
  console.log("Hi");
}
// say hello after 1 second
setTimeout(sayHello, 1000);

// say hello after 1 second
setTimeout(() => {
  console.log("Hi");
}, 1000);

// say hello as soon as you can (not immediately)
setTimeout(() => {
  console.log("Hi");
}, 0);
setTimeout(() => {
  console.log("Hi");
});
console.log("log 1");
setTimeout(() => {
  console.log("log 2");
});
console.log("log 3");

/**
 * 2. clearTimeout
 */
const timeoutId2 = setTimeout(() => {
  console.log("Tada!!!");
}, 5000);
clearTimeout(timeoutId2); // cancel the timeout
// should be called before the timeout expired

/**
 * 3. Late timeout
  The timeout can also fire later than expected if the page (or the OS/browser) is busy with other tasks.
 */
setTimeout(() => {
  console.log("Hi");
});
let count = 1;
for (let i = 0; i < 1e9; i++) {
  count++;
}
console.log("done");
