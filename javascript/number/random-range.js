/**
 * Random một số ngẫu nhiên trong khoảng [a, b] với a < b
 */

function randomNumber(a, b) {
  // a: 10
  // b: 100
  if (a >= b) return -1;
  const random = Math.random() * (b - a);
  return Math.round(random) + a;
}

console.log(randomNumber(10, 100));