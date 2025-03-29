/**
 * Tìm hiểu về split and join
 * - Split: Phân tách chuỗi thành mảng các chuỗi con
 */
"Javascript course".split(""); // ['J', 'a', ...]
"Javascript course".split("course"); //

console.log("Javascript course".split("course"));
console.log("Javascript course".split("courses"));

/**
 * Join: Gộp các items của một mảng thành một chuỗi
 */
const textArrays = ["Hello", "world"];
textArrays.join(); // 'Hello,world'
textArrays.join(""); // 'Helloworld'
textArrays.join(" "); // 'Helloworld'
textArrays.join("-"); // 'Hello-world'

/**
 * Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */
