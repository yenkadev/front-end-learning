/**
 * Kiểm tra phần tử có tồn tại không
 * - every(callbackFn): Kiểm tra tất cả phần tử thoả điều kiện
 * - some(callbackFn): Kiểm tra có một phần tử thoả điều kiện
 * - indexOf(searchElement): Tìm vị trí đầu tiên của phần tử searchElement
 * - lastIndex(searchElement): Tìm vị trí cuối cùng của phần tử searchElement
 * - includes(searchElement): Kiểm tra có chứa phần tử searchElement không
 * - find(callbackFn): Tìm phần tử đầu tiên thoả điều kiện
 * - findIndex(callbackFn): Tìm vị trí của phần tử đầu tiên thoả điều kiện
 */
[1, 2, 4].every((number) => number % 2 === 0); // false
[0, 2, 4].every((number) => number % 2 === 0); // true

[1, 2, 4].some((number) => number % 2 === 0); // true
[1, 3, 5].some((number) => number % 2 === 0); // false

[1, 1, 2].indexOf(1); // 0
[1, 1, 2].lastIndex(1); // 1

["FE", "BE", "PM"].includes("fe"); // false