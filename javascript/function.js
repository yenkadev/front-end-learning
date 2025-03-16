/**
 * what: tập hợp các lệnh thực hiện một chức năng cụ thể nào đó
 * why: tối ưu code, dễ maintain, dễ quản lý, dễ đọc
 * when: nhận thấy các dòng lệnh có tới nhau và tới nhau và có thể tách rời được
 * who: dev
 */

/**
 * Khai báo function
 * tham số: optional, chỉ nên tối đa là 3 tham sổ
 * return statement: optional
 */
function hello(name) {
  console.log("Welcome", name);
}

function sumTwoPositive(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a + b;
}

/**
 * Cách đặt tên
 * Dùng tiếng anh
 * Dùng động từ
 * Thường hay dùng với prefix: create, update, get, post, delete, check, convert, ...
 */


/**
 * Một số lưu ý
 * Mỗi hàm chỉ làm 1 nhiệm vụ
 * Nên giữ code của 1 hàm ngắn thôi, dưới 30 dòng code
 * Luôn kiểm tra tính hợp lệ của tham số ở đầu hàm
 * Return kiểu dữ liệu đồng nhất với nhau
 * Nên chỉ comments cho những logic phức tạp
 * Chỉ nên có tối đa là 3 tham số truyền vào
 */