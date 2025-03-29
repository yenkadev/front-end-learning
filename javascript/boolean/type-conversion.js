/**
 * Type conversion vs Type coercion
 * - Điểm tương đồng là đều chuyển đổi kiểu dữ liệu từ dạng này sang kiểu khác
 * - Type coercion là ép kiểu tự động (ép kiểu ngầm)
 * - Type conversion mang ý nghĩa là có thể ép kiểu tự động như type coercion hoặc ép kiểu tường minh (tức do mình chỉ định ép kiểu)
 */

/**
 * Type coercion
 */
const a = 1 + "2";
console.log("a", a); // 12

const b = 1 - "2";
console.log("b", b); // -1

const message = "Js course";
if (message) { // message dc tự động convert sang Boolean 
  console.log("Ready to learn!");
}

/**
 * Type conversion
 */
const error = "Something went wrong!";
const isError = Boolean(error);

const mark = 9;
const markString = mark.toString(); // '9'

const type = "1";
const typeId = Number.parseInt(type); // 1

/**
 * 3 kiểu type conversion phổ biến
 * - String Conversion: .toString() or String()
 * - Numeric Conversion: parseInt(), parseFloat() or Number()
 * - Boolean Conversion: ! operator or Boolean()
*/

/**
 * Read more:
 * - https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
 * - https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion
 * - https://stackoverflow.com/questions/8857763/what-is-the-difference-between-casting-and-coercing
 */
