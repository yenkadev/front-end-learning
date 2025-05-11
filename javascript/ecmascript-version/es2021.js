/**
 * ECMAScript 2021
 *  Key              Value
    Name            ECMAScript 2021
    Short name      ES2021
    Was finalized   in June 2021
 */

/**
 * Feature list
  # Name                          Desc
  1 Logical Assignment Operators  ??= , ||= , &&=
  2 Numeric separator             1_500_000
  3 String.prototype.replaceAll() replace all matches with new value
  4 Promise.any                   resolve the value of the first fulfilled promise
  5 WeakRefs and Finalizers       read more
 */

/**
 * 1. Logical Assignment Operators
    # Name                           Desc
    1 Logical OR assignment ||=      x ||= y means only assigns x = y if x is falsy.
    2 Logical AND assignment &&=     x &&= y means only assigns x = y if x is truthy.
    3 Logical Nullish assignment ??= x??= y means only assigns x = y if x is nullish
 */
//"Or Or Equals"
x ||= y;
x || (x = y);
// "And And Equals"
x &&= y;
x && (x = y);
// "QQ Equals"
x ??= y;
x ?? (x = y);

// Logical OR assignment examples
const a = { duration: 50, title: "" };
a.duration ||= 10;
console.log(a.duration);
// expected output: 50
a.title ||= "title is empty.";
console.log(a.title);
// expected output: "title is empty"

// Logical AND assignment examples
let a1 = 1;
let b = 0;
a1 &&= 2;
console.log(a1);
// expected output: 2
b &&= 2;
console.log(b);
// expected output: 0

// Logical Nullish assignment examples
const a2 = { duration: 50 };
a2.duration ??= 10;
console.log(a2.duration);
// expected output: 50
a2.speed ??= 25;
console.log(a2.speed);
// expected output: 25

/**
 * 2. Numeric separator
 */
// before
const count = 1000000;
// ES2021 - more readable
const count1 = 1_000_000;
// don't overuse it =)))
1_00; // 100
10_0; // 100
1_5_0; // 150;

/**
 * 3. String.prototype.replaceAll()
 */
// Before: need to use regex with global flag
const queryString = "q=query+string+parameters";
const withSpaces = queryString.replace(/\+/g, " ");
// 'q=query string parameters'
// ES2021
const queryString1 = "q=query+string+parameters";
// const withSpaces = queryString1.split('+').join(' ');
queryString1.replaceAll("+", " ");
// 'q=query string parameters'

/**
 * 4. Promise.any()
    - resolve the value of the first fulfilled promise
    - if all promises are rejected, it will throw AggregateError
    - AggregateError is an error that groups together many errors
 */
Promise.any([
  fetch("https://v8.dev/").then(() => "home"),
  fetch("https://v8.dev/blog").then(() => "blog"),
  fetch("https://v8.dev/docs").then(() => "docs"),
])
  .then((first) => {
    // Any of the promises was fulfilled.
    console.log(first);
    // → 'home'
  })
  .catch((error) => {
    // All of the promises were rejected.
    console.log(error);
  });
// Promise.race = wait for the first item either fulfilled or rejected.
// Promise.any = wait for the first fulfilled item
