/**
 * Random một số ngẫu nhiên trong khoảng [0, n]
 */

function randomNumber(n) {
  // n = 5  random(): 0.9
  if (n <= 0) return -1;
  const random = Math.random() * n;
  return Math.round(random);
}

console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
