/**
 * Giới thiệu về kiểu number
 * 1. Object Number
 * 2. Object Math
 * 3. Imprecise calculations - Tính sai số
 * 4. Rounding - Làm tròn số
 * 5. Random number
 * 6. Coding exercises
 */

/**
 * Giới thiệu về kiểu number
 * - Có 2 loại số: 
 * - Integer(int): số nguyên (1, 2, 3, -2, -3, ...)
 * - Float(float): số thực (1.5, 2. 5, 3.77, ...)
 * - Note: Js chỉ có một kiểu dữ liệu là number dùng cho cả số nguyên và số thực
 */
const count = 1;
const mark = 9.5;

const long = 1000000;
const longer = 1_000_000;
const short = 1e6;

const smaller = 0.0001;
const smallerShort = 1e-4;

/**
 * Arithmetic operators
 */
const sum = 1 + 2;
const subtract = 1 - 2;
const multiply = 1 * 2;
const divide = 1 / 2;
const remainder = 1 % 2;

// Increment
let count1 = 1;
const n = count1++; // 1 return first then increase

let count2 = 1;
const n2 = ++count1; // 2 increase first then return

// Decrement
let count3 = 1;
const n3 = count3--; // 1 return first then increase

let count4 = 1;
const n4 = --count3; // 0 decrease first then return

// Unary plus
const n5 = +('123'); // 123

// Unary negation
const n6 = -'123'; // -123

// Exponentiation operator
const n7 = 2 ** 3; // 2 x 2 x 2 = 8

/**
 * Assignment operators
 */
let n8 = 1;
n8 += 1; 

let n9 = 1;
n9 -= 1;

let n10 = 1;
n10 *= 1;

let n11 = 1;
n11 /= 1;

/**
 * toString
 */
const n12 = 20;
n12.toString();

/**
 * Read more:
 * - https://steve.hollasch.net/cgindex/coding/ieeefloat.html
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 */
