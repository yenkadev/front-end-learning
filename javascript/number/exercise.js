/**
 * 1. Given 3 numbers, find max
 */


function findMax(a, b, c) {
  let max = a;
  if (max < b) max = b;
  if (max < c) max = c;
  return max;
}
console.log(findMax(5, 7, 3));

function findMaxEven(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;
  if (max < c && a % 2 === 0) max = a;
  if (max < b && b % 2 === 0) max = b;
  if (max < c && c % 2 === 0) max = c;
  return max;
}
console.log(findMaxEven(9, 7, 4));

/**
 * 2. Sum all digits of a number having 3 digits
 * Ex: 345 -> 12
 * Solution: 3, 4, 5 
 */

function sumDigits(n) {
  if (n.toString().length !== 3) return -1;
  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);
  return ones + tens + hundreds;
}
console.log(sumDigits(345));


