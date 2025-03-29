/**
 * Tổng quan về string trong javascript
 * 1. Tổng quan về string
 * 2. Object String
 * 3. Một số thao tác cơ bản với string
 * 4. Làm việc với substring
 * 5. Tìm kiếm và thay thế
 * 6. Split and Join
 * 7. Coding exercises
 */

/**
 * Tổng quan về string
 * - Js không có kiểu dữ liệu cho từng ký tự, chỉ dùng chung một kiểu dữ liệu là string
 * - Js không có kiểu dữ liệu cho từng ký tự, chỉ dùng chung một kiểu dữ liệu là string
 */

/**
 * Quotes:
 * - Single or double quote
 * - Backticks for formatting string
 * - Escape '" back slash
 */
const name = "Yen";
const nameSingle = "Yen single"; // recommend
const formatName = `My name is ${nameSingle}`;
const nameWithSlash = "I'm a developer";

/**
 * String is immutable
 */
let name = "Yen Ka";
name[0] = "S";
console.log("name", name); // Yen Ka

/**
 * Read more: 
 * - https://stackoverflow.com/questions/2241348/what-are-unicode-utf-8-and-utf-16
 * - https://en.wikipedia.org/wiki/Character_encoding
 * - https://en.wikipedia.org/wiki/UTF-16
 * - https://asecuritysite.com/coding/asc2
 * - https://javascript.info/string
 */