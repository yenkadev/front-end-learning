/**
 * Giới thiệu Array object
 */

/**
 * Static methods
 * - Array.isArray(arr): Kiểm tra arr có phải là mảng không
 * - Array.from(): Tạo mảng mới từ các dữ liệu khác như Set, Iterable, ...
 */
Array.isArray(123); // false;
Array.isArray("Js course"); // false;
Array.isArray(true); // false
Array.isArray([]); // true
Array.isArray([1, 2, 3]); // true

/**
 * Instance props
 */

/**
 * Instance methods
 */
/**
 * Methods kiểm tra phần tử có tồn tại không
 * - every(callbackFn): Kiểm tra tất cả phần tử thoả điều kiện
 * - some(callbackFn): Kiểm tra có một phần tử thoả điều kiện
 * - indexOf(searchElement): Tìm vị trí đầu tiên của phần tử searchElement
 * - (searchElement): Tìm vị trí cuối cùng của phần tử searchElement
 * - includes(searchElement): Kiểm tra có chứa phần tử searchElement không
 * - find(callbackFn): Tìm phần tử đầu tiên thoả điều kiện
 * - findIndex(callbackFn): Tìm vị trí của phần tử đầu tiên thoả điều kiện
 */

/**
 * Method thêm xoá phần tử
 * - push(element0, ..., elementN) : Thêm cuối mảng
 * - pop(): Xoá cuối mảng
 * - shift(): Xoá đầu mảng
 * - unshift(element0, ..., elementN): Thêm đầu mảng
 * - splice(start, deleteCount, item1, ..., itemN): Xoá/thêm giữa mảng
 */

/**
 * Method hay sử dụng
 * - forEach(callbackFn): Duyệt mảng
 * - map(callbackFn): Biến đổi mảng
 * - filter(callbackFn): Lọc mảng theo điều kiện
 * - slice(start, end): Lấy mảng con
 * - reduce(): Duyệt mảng và tính toán cho ra kết quả cuối cùng
 */

/**
 * Method khác
 * - fill(value, start = 0, end = arr.length): Fill value từ start tới end
 * - join(): Biến đổi mảng thành chuỗi
 * - concat(): Nối mảng
 * - reverse(): Ðảo ngược mảng
 * - sort(): Sắp xếp mảng
 */
["Js", "course"].join("-"); // "Js-course"
[1, 2, 3].reverse(); // [3, 2, 1]