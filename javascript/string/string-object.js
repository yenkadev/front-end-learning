/**
 * String - A primitive wrapper object
 */

// Instance properties
const name = 'Javascript course';
console.log('name', name.length);

/**
 * Instance methods:
 * - charAt(index): Lấy ký tự tại vị trí index
 * - concat(): Nối chuỗi
 * - includes(): Kiểm tra có chứa chuỗi nào đó không
 * - startsWith(): Kiểm tra có bắt đầu bằng chuỗi nào đó không
 * - endsWith(): Kiểm tra có kết thúc bằng chuỗi nào đó không
 * - indexOf(): Vị trí đầu tiên có chuỗi nào đó
 * - lastIndexOf(): Vị trí cuối cùng có chuỗi nào đó
 * - padStart(): Thêm vào đầu string
 * - padEnd(): Thêm vào cuối string
 * - repeat(): Nhân chuỗi hiện tại lên bao nhiêu lần
 * - replace(): Thay thể chuỗi đầu tiên
 * - replaceAll(): Thay thể tất cả các chuỗi
 * - slice(): Lấy chuỗi con
 * - substring(): Lấy chuỗi con
 * - split(): Tách chuỗi thành mảng các chuỗi con
 * - trim(): Bỏ khoảng trắng đầu và cuối string
 * - trimStart(): Bỏ khoảng trắng đầu string
 * - trimEnd(): Bỏ khoảng trắng cuối string
 * - toLowerCase(): Chuyển đổi thành chữ viết thường
 * - toUpperCase(): Chuyển đổi thành chữ viết hoa
 */
'Javascript course'.charAt(0); // J
const name1 = 'Javascript course';
console.log('name1', name1.charAt(name1.length - 1)); // e
console.log('name', 'Javascript course'[0]);

'Javascript'.concat(' ', 'Course');

'a'.padStart(5, '*'); // ****5;
'abc'.padEnd(5, '*'); // abc**;

'*'.repeat(5); // *****

' Javascript Course '.trim(); // 'Javascript Course'
' Javascript Course '.trimStart(); // 'Javascript Course '
' Javascript Course '.trimEnd(); // ' Javascript Course

/**
 * Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */
