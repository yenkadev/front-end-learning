/**
 * Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
 */

/**
 * Bài 2: Kiểm tra số tăng dần
  Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
  0 < n < 1000000
  Số tăng dần có ít nhất 2 chữ số
  Chữ số bên phải luôn lớn hơn chữ số bên trái
  Trả về true nếu là số tăng dần, ngược lại trả về false.
  Ví dụ:
  isIncreasingNumber(11) --> false
  isIncreasingNumber(123) --> true
  isIncreasingNumber(12321) --> false
 */

// function sum(n) {
//   if (n <= 0) return 0;
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

function isIncreasingNumber(n) {
  if (n <= 0 || n >= 1000000) return false;

  const str = String(n);
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] >= str[i + 1]) {
      return false;
    }
  }
  return true;
}
