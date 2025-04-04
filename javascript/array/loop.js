/**
 * Duyệt các phần tử của array
 */
// before ES5
const numberList = [1, 2, 3];
for (let i = 0; i < numberList.length; i ++) {
  console.log(numberList[i]); // 1, 2, 3
}

// ES5 forEach
const numberList1 = [1, 2, 3];
numberList1.forEach(number => console.log(number)); // 1, 2, 3

// ES5 for ... of, for ... in
const numberList2 = [1, 2, 3];
for (const number of numberList2) {
  console.log(number);
}