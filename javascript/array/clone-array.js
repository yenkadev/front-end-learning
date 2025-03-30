/**
 * Clone array
 * - Array cũng là tham chiếu, nên cẩn thận khi dùng phép gán
 * - Clone array trước khi thực hiện thay đổi
 */
const numberList = [1, 2, 3];
const anotherList = [...numberList];
anotherList[0] = 5;
console.log("numberList", numberList);