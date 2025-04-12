/**
 * : Tìm các mảng con có chứa số dương chẳn liên tiếp
  Viết hàm findAllPositiveEvenSubArr(numberList) để tìm ra tất cả các mảng con chỉ chứa các số dương
  chẳn.
  findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20]);
  // should return
  // [
  // [2, 4],
  // [10, 20]
  // ]
 */

function findAllPositiveEvenSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const result = [];
  let subArr = [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (number > 0 && number % 2 === 0) {
      subArr.push(number);
    } else {
      if (subArr.length >= 2) {
        result.push(subArr);
      }
      subArr = [];
    }
  }

  if (subArr.length >= 2) {
    result.push(subArr);
  }

  return result;
}
