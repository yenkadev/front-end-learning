/**
 * Giới thiệu về kiểu number
 * 1. Object Number có gì?
 * 2. Object Math có gì?
 * 3. Imprecise calculations
 * 4. Rounding - Làm tròn số
 * 5. Random number
 * 6. Bài tập thực hành
 */

// Giới thiệu về kiểu number
/**
 * Có 2 loại số: 
 * Integer(int): Số nguyên: 1, 2, 3, -2, -3
 * Float(float): Số thực: 1.5, 2. 5, 3.77
 */
const count = 1;
const mark = 9.5;

const long = 1000000;
const longer = 1_000_000;
const short = 1e6;

const smaller = 0.0001;
const smallerShort = 1e-4;

// Arithmetic operators
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
const n3 = count3--;

let count4 = 1;
const n4 = --count3;

// Unary plus
const n5 = +('123');

// Exponentiation operator
const n6 = 2 ** 3; // 2 x 2 x 2 = 8

// Assignment operators
let n7 = 1;
n7 += 1; 

let n8 = 1;
n8 -= 1;

let n9 = 1;
n9 *= 1;

let n10 = 1;
n10 /= 1;

// toString
const n11 = 20;
n.toString();