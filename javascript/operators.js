/**
 * Arithmetic operators(Toán tử số học): a + b, a - b, a * b, a / b, a % b
 * Unary operators(Operator có 1 operand): count++, count--, ++count, --count
 * Binary operators(Operator có 2 operand): a = b, a + b
 * Ternary operators(Operator có 3 operand): isShow ? 'Show' : 'Hide'
 * Logical operators(Operator luận lý): a || b, a && b, a > b, a < b , a >= b, a <= b, a != bb
 * Bitwise operators(Operator xử lý BIT): a >> b, a | b
 */


/**
 * Assignment - Phép gán
 */
const count = 1; // 1 literal value
const result = 1 + 2 * 3;

/**
 * Unary 
 */
const count2 = 1; 
const negativeCount = -count2;
console.log("negativeCount", negativeCount);

let idx = 1; 
const incrementPrefix = ++idx;
console.log("incrementPrefix", incrementPrefix);

const quantity = +'2';
console.log("quantity", quantity);

const isValid = !true;
console.log("isValid", isValid);

/** 
 * Ternary 
 * 
 * */

const mark = 9;
const grade = mark > 8 ? "Good" : "Bad";
const grade2 = mark > 8 ? 'Good' : mark > 5 ? 'Ok' : 'Bad'; // Avoid nested ternary

/**
 * Operator Precedence -  Thứ tự ưu tiên 
 */
const result4 = 1 + (2 + -2) * 3 - +"3"; // -2

