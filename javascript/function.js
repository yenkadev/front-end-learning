/**
 * Function in Javascript
 * - what: tập hợp các lệnh thực hiện một chức năng cụ thể nào đó
 * - why: tối ưu code, dễ maintain, dễ quản lý, dễ đọc
 * - when: nhận thấy các dòng lệnh có tới nhau và tới nhau và có thể tách rời được
 * - who: dev
 */

/**
 * Khai báo function
 * - Dùng từ khóa function
 * - Tham số hàm(argument): optional, chỉ nên tối đa là 3 tham sổ
 * - Body: Process code
 * - Return statement: optional
 */
function hello(name) {
  console.log("Welcome", name);
}

function sumTwoPositive(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a + b;
}

/**
 * Cách đặt tên cho function
 * - Dùng tiếng anh
 * - Dùng động từ vì function thực hiện một nhiệm vụ nào đó
 * - Dùng với prefix: create, update, get, post, delete, check, convert, ...
 */
function getAllStudents() { }
function convertNumberToString() { }
function updateUserProfile() {}

/**
 * Một số lưu ý khi viết function
 * - Mỗi hàm chỉ làm 1 nhiệm vụ
 * - Nên giữ code của 1 hàm ngắn thôi, dưới 30 dòng code
 * - Luôn kiểm tra tính hợp lệ của tham số ở đầu hàm
 * - Return kiểu dữ liệu đồng nhất với nhau
 * - Nên chỉ comments cho những logic phức tạp
 * - Chỉ nên có tối đa là 3 tham số truyền vào
 */

/**
 * Read more: https://javascript.info/function-basics
 */