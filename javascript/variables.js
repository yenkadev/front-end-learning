/**
 * Variables in Javascript
 * - what: Lưu trữ giá trị lên bộ nhớ
 * - why: Khống có cách khác để lưu tạm giá trị
 * - when: Cần lưu giá trị
 * - who: Dev
 */

/**
 * Cách khai báo biến trong Js
 * ES5: Dùng var (function scope)
 * ES6: Dùng let và const (block scope)
 * Scope thì hiểu sau
 * Const thì dùng cho hằng số mà kg nhu cầu thay đổi
 * Let thì dùng cho biến có mong muốn thay đổi giá trị
 * Tips: Luôn luôn dùng const cho đến khi cần let
 * - ES5: Dùng var (function scope)
 * - ES6: Dùng const hoặc let (block scope)
 * - Scope thì hiểu sau
 * - Const thì dùng cho hằng số hoặc biến mà kg nhu cầu thay đổi
 * - Let thì dùng cho biến có mong muốn thay đổi giá trị
 * - Tips: Luôn luôn dùng const cho đến khi cần let
 */

// ES5
var name = "Javascript course";

// ES6
const PI = 3.14;
const name = "Js";
name = "Course"; // error assignment to constant variable
let count = 1;
count = 2; // works

// ES5
var name = "Javascript course";

// ES6
const PI = 3.14;
const name = "Js";
name = "Course"; // error assignment to constant variable
let count = 1;
count = 2; // works

/**
 * Cách đặt tên biến
 * - Kg đặt tên bằng số, ký tự đặc biệt, dấu cách
 * - Đặt tên đúng nghĩa với giá trị được gán cho biến
 * - Dùng danh từ để đặt tên biến
 * - Dùng tiếng anh
 * - Với true/false thì đặt tên dùng prefix has hoặc is hoặc show hoặc từ mang ý nghĩa chỉ nhận giá trị true hoặc false
 * - Với dạng danh sách thì suffix List
 */

const product = "Js course"; // BAD
const productName = "Js course"; // GOOD

// true/false variable
const hasValidItem = true;
const hasPositiveNumber = false;
const isSelected = true;
const show = false;

// single noun
const student = {
  name: "Yen Ka",
};

// plural noun
const studentList = [].map((student) => console.log(student.name));

/**
 * Case styles
 * - camelCase: studentList (identifier)
 * - UPPER_CASE: PI, API_URL (Constants)
 * - PascalCase: Menu, Sidebar (Component or Class)
 * - snake_case: student_name (unpopular Usage)
 * - kebab-case: menu-item (Css class name)
 */
