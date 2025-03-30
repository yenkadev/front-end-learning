/**
 * Kiểm tra số có tối đa 3 chữ số có phải là số đối xứng hay không?
  Viết hàm isSymmetricNumber(n) để nhận vào số nguyên dương n có tối đa 3 chữ số và trả về true nếu n là số đối xứng, ngược lại trả về false.

  Giả sử tham số n truyền vào luôn luôn là số có tối đa 3 chữ số. (0 --> 999)

  Số đối xứng là số mà đọc từ trái sang phải nó giống như đọc từ phải sang trái.

  Ví dụ: 1, 22, 33, 121, 222, 353, 373, ...
 */

// Case 1 -> 10. Return true
// Case 2 -> 11 -> 999 -> Kiểm tra -> true/false

function isSymmetricNumber(n) {
  if (n < 0 || n > 999) return -1;
  if (n < 10) return true;
  if (n >= 10 && n <= 99) return n % 10 === Math.floor(n / 10);
  if (n > 99) return n % 10 === Math.floor(n / 100);
}
