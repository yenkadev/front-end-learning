/**
  * Kiểm tra mảng có chứa số nguyên tố không?
  Viết hàm hasPrime(numberList) nhận vào là một mảng số nguyên dương.

  Trả về true nếu có ít nhất một số nguyên tố, ngược lại trả về false.

  Gợi ý: có thể tận dụng lại hàm kiểm tra số nguyên tố đã làm ở bài tập trước đó.

  Viết bằng 5 cách khác nhau:

  Sử dụng for...i hasPrimeV1(numberList)

  Sử dụng forEach() hasPrimeV2(numberList)

  Sử dụng find() hasPrimeV3(numberList)

  Sử dụng findIndex() hasPrimeV4(numberList)

  Sử dụng some() hasPrimeV5(numberList)
 */

// V1 for .. i
function isPrime(n) {
  if (n < 2) return false;
  const sqrtN = Math.trunc(Math.sqrt(n));
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function hasPrimeV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (isPrime(numberList[i])) return true;
  }
  return false;
}
// console.log(hasPrimeV1([1, 4, 6]));
// console.log(hasPrimeV1([2, 5, 7]));

// V2 forEach
function hasPrimeV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let hasPrime = false;
  numberList.forEach((number) => {
    if (isPrime(number)) {
      hasPrime = true;
    }
  })
  return hasPrime;
}

// V3 find
function hasPrimeV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  // numberList [2, 5, 6]
  return Boolean(numberList.find((number) => isPrime(number))); // undefined
}

// V4 findIndex
function hasPrimeV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  // numberList [6]
  return numberList.findIndex((number) => isPrime(number)) >= 0; // 0 // -1
}


// V5 findIndex
function hasPrimeV5(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.some((number) => isPrime(number));
}
console.log(hasPrimeV5([5, 4, 6]));
