/**
 * 1. Tổng quan về array
 * 2. Array object - Props & Methods
 * 3. Array destructuring
 * 4. Clone mảng
 * 5. Duyệt mảng
 * 5. Thêm xoá phần tử
 * 6. Kiểm tra tồn tại của phần tử
 * 7. Tìm kiếm một phần tử
 * 8. Transform mảng
 * 9. Lọc phần tử theo điều kiện
 * 10. Sắp xếp mảng
 * 11. reduce
 * 12. Coding exercise
 */

/**
 * Khai báo mảng
 * - Ðặt tên nên dùng suffix là List
 * - Mỗi phần tử có thể có một kiểu dữ liệu khác nhau.
 */
const numberList = [];
const numberList1 = [1, 2, 3];
const numberList2 = ["FE", 1, 2, true, false, undefined, null];
const studentLits = [
  {
    id: "0001",
    name: "John",
  },
  {
    id: "0002",
    name: "Smith",
  },
];
const boardList = [
  [1, 2],
  ["a", "b", "c"],
  [true, false, true],
];
const mixedList = [
  1,
  "a",
  true,
  null,
  undefined,
  {
    id: "0002",
    name: "Smith",
  },
  [1, 2, 3],
];

/**
 * Truy xuất phần tử của mảng
 * - Dùng square brackets để truy xuất phần tử tại vị trí index
 * - Index bằng đầu 0
 */
const numberList3 = [1, 2, 3];
numberList3[0]; // 1
numberList3[1]; // 2

/**
 * Mảng 2 chiều
 */
const boardList2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
boardList[0][0]; // 1
boardList[1][2]; // 6