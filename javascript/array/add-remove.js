/**
 * Thêm xoá phần tử
 * - push(element0, ..., elementN) : Thêm cuối mảng
 * - pop(): Xoá cuối mảng
 * - shift(): Xoá đầu mảng
 * - unshift(element0, ..., elementN): Thêm đầu mảng
 * - splice(start, deleteCount, item1, ..., itemN): Xoá/thêm giữa mảng
 */
const numberList = [1, 2, 3];
numberList.push(4, 5); // [1, 2, 3, 4, 5]

const numberList1 = [1, 2, 3];
numberList.post(4, 5); // [1, 2, 3]

const numberList2 = [1, 2, 3];
numberList2.unshift(0); // [0, 1, 2, 3]

const numberList3 = [1, 2, 3];
numberList3.splice(2, 5); // [1, 2, 5, 3]