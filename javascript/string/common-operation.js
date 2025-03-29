/**
 * Thao tác cơ bản với string
 */

/**
 * Lấy ký tự tại vị trị index
 */
'Javascript course'.charAt(0); // J
'Javascript course'.charAt(3); // a
const name1 = 'Javascript course';
console.log("name1", name1.charAt(name1.length - 1)); // e

/**
 * Nối chuỗi
 */
const firstName = "John";
const lastName = "Smith";

const fullName = firstName + ' ' + lastName; 
const fullName2 = firstName.concat(' ', lastName);
const fullName3 = `${firstName} ${lastName}`; // recommended

/**
 * Duyệt chuỗi
 */
const name = 'John Smith';
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

/**
 * Chuyển đổi hoa thường
 */
'John Smith'.toLowerCase();
'John Smith'.toUpperCase();

/**
 * Tìm kiểm chuỗi con
 */
const text = "Hello world";
text.indexOf('o'); // 4
text.lastIndexOf('o'); // 7

/**
 * Kiểm tra chứa chuỗi con
 */
const text2 = "Hello world";
text2.startsWith("Hello"); // true
text2.endsWith("hello"); // false
text2.includes("hello"); // false

/**
 * Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */