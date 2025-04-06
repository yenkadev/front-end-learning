/**
 * Biến đổi mảng với f(i) = f(i-1) + f(i + 1)
  Viết hàm transformNumbers(numberList) để biến đổi các số hiện tại của mảng numberList thành các số mới theo công thức.

  f(i) = f(i - 1) + f(i + 1) với i là index
  Tạm dịch nôm na là phần tử ở vị trí i sẽ bằng tổng của 2 phần tử bên cạnh.

  Trường hợp đầu mảng và cuối mảng sẽ bằng phần tử liền kề.

  Trường hợp mảng có ít hơn một phần tử thì sẽ giữ nguyên, không biến đổi.

  Lưu ý: mảng trả về là một mảng mới, không phải là mảng truyền vào nhé!

  Ví dụ

  transformNumbers([]) --> [] Passed

  transformNumbers([1]) --> [1] Passed

  transformNumbers([5, 10]) --> [10, 5] Passed

  transformNumbers([2, 4, 6, 8]) --> [4, 8, 12, 6] chú thích bên dưới Passed

  Đặt mảng đầu vào là a, mảng trả về là b, ta có:

  b[0] = a[1] = 4 (đầu mảng)

  b[1] = a[0] + a[2] = 2 + 6 = 8

  b[2] = a[1] + a[3] = 4 + 8 = 12

  b[3] = a[2] = 6 (cuối mảng)

  Viết hàm này theo 3 cách khác nhau:

  Dùng for...i transformNumbersV1(numberList)

  Dùng forEach() transformNumbersV2(numberList)

  Dùng map() transformNumbersV3(numberList)
 */

// V1 for ... i
function transformNumbersV1(numberList) { // [2, 4, 6, 8]
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (numberList.length === 1) return [...numberList];
  
  const newList = [numberList[1]]; // [4, 8, 12]
  for (let i = 1; i < numberList.length - 1; i++) {
    newList[i] = numberList[i - 1] + numberList[i + 1];
  }
  newList.push(numberList[numberList.length - 2]);
  return numberList;
}

console.log(transformNumbersV1([1]));
console.log(transformNumbersV1([2, 4, 6, 8]));
console.log(transformNumbersV1([5, 10]));

// V2 foreach
function transformNumbersV2(numberList) { // [2, 4, 6, 8]
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (numberList.length === 1) return [...numberList];
  
  const newList = []; // []
  numberList.forEach((item, index) => {
    const prevNumber = numberList[index - 1] || 0; // 0 // 2 // 4 // 6
    const nextNumber = numberList[index + 1] || 0; // 4 // 6 // 8 // 0
    newList.push(prevNumber + nextNumber); // 4 // 8 // 12 // 6
  });
  
  return numberList;
}

console.log(transformNumbersV2([1]));
console.log(transformNumbersV2([2, 4, 6, 8]));
console.log(transformNumbersV2([5, 10]));

// V2 map
function transformNumbersV3(numberList) { // [2, 4, 6, 8]
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  if (numberList.length === 1) return [...numberList];
  
  const newList = []; // []
  numberList.map((item, index) => {
    const prevNumber = numberList[index - 1] || 0; // 0 // 2 // 4 // 6
    const nextNumber = numberList[index + 1] || 0; // 4 // 6 // 8 // 0
    newList.push(prevNumber + nextNumber); // 4 // 8 // 12 // 6
  });
  
  return numberList;
}

console.log(transformNumbersV3([1]));
console.log(transformNumbersV3([2, 4, 6, 8]));
console.log(transformNumbersV3([5, 10]));