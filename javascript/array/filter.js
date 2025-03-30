/**
 * Lọc mảng theo điều kiện với hàm filter()
 * - Dùng hàm filter(callbackFn) để lọc mảng theo điều kiện cho trước
 * - Kết quả trả về là một mảng con mới
 */

const numberList = [1, 2, 3];
numberList.filter((number) => number % 2 === 0); // [2]

