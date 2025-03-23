/**
 * what: Lưu trữ giá trị lên bộ nhớ
 * why: Khống có cách khác để lưu tạm giá trị
 * when: Cần lưu giá trị
 * who: Dev
 */

/**
 * Cách khai báo biến trong Js
 * ES5: Dùng var (function scope)
 * ES6: Dùng let và const (block scope)
 * Scope thì hiểu sau
 * Const thì dùng cho hằng số mà kg nhu cầu thay đổi 
 * Let thì dùng cho biến có mong muốn thay đổi giá trị
 * Tips: Luôn luôn dùng const cho đến khi cần let
 */

/**
 * Cách đặt tên biến
 * Kg đặt tên bằn số, ký tự đặc biệt, dấu cách
 * Dùng danh từ
 * Đặt tên đúng nghĩa giữa giá trị và tên biến
 * Dùng tiếng anh
 * Với true/false thì đặt tên dùng prefix has hoặc is hoặc show hoặc từ mang ý nghĩa chỉ nhận giá trị true hoặc false
 * Với dạng danh sách thì suffix List
 */

const product = 'Js course'; // BAD
const productName = 'Js course'; // GOOD

// true/false varibales
const hasValidItem = true;
const isSelected = true;
const show = false;
const hasPositiveNumber = false;

// single noun
const student = {
  name: "Yen Ka"
}

// plural noun
const studentList = [].map(student => console.log(student.name));

/**
 * Kiểu đặt tên biến
 * camelCase: studentList (identifier)
 * UPPER_CASE: PI, API_URL (Constants)
 * PascalCase: Menu, Sidebar (Component or Class)
 * snake_case: student_name (unpopular Usage)
 * kebab-case: menu-item (Css class name)
 */
