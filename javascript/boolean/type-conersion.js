/**
 * Type conversion vs Type coercion
 * Điểm tương đồng là đều chuyển đổi kiểu dữ liệu từ dạng này sang kiểu khác
 * Type coercion là ép kiểu tự động (ép kiểu ngầm)
 * Type conversion mang ý nghĩa là có thể ép kiểu tự động như type coercion hoặc ép kiểu tường minh (tức do mình chỉ định ép kiểu)
 */

// Type coercion
const a = 1 + '2';
console.log("a", a); // 12

const b = 1 - '2';
console.log("b", b); // -1

const message = 'Js course';
if (message) {
  console.log("Ready to learn!");
}

// Type conversion
const error = "Something went wrong!";
const hasError = Boolean(error);

const mark = 9;
const markString = mark.toString();

const type = '1';
const typeId = Number.parseInt(type);






