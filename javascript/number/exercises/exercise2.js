/**
 * Tìm chữ số lớn nhất của một số nguyên dương
  Viết hàm function getMaxDigit(n) {} để tìm ra chữ số lớn nhất của một số nguyên dương n (0 <= n < 1000)

  Ví dụ:

  getMaxDigit(1) --> 1

  getMaxDigit(12) --> 2

  getMaxDigit(123) --> 3

  getMaxDigit(921) --> 9

  Trường hợp dữ liệu không hợp lệ, nằm ngoài vùng cho phép của n thì trả về -1
 */

function getMaxDigit(n) {
  if (n < 0 || n > 1000) return -1;
  const ones = n % 10; // 1
  const tens = Math.trunc((n % 100) / 10); // 2
  const hundreds = Math.trunc(n / 100); // 9
  let max = ones;
  if (max < tens) max = tens;
  if (max < hundreds) max = hundreds;
  return max;
}
console.log(getMaxDigit(1));
console.log(getMaxDigit(12));
console.log(getMaxDigit(123));
console.log(getMaxDigit(921));
