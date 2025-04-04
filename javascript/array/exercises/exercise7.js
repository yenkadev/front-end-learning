/**
 * Kiểm tra mảng có phải tất cả đều là số hoàn hảo không?
  Viết hàm isAllPerfectNumbers(numberList) nhận vào mảng số nguyên dương.

  Trả về true nếu tất cả đều là số hoàn hảo, ngược lại trả về false.

  Ví dụ:

  isAllPerfectNumbers([]) --> false

  isAllPerfectNumbers([1, 6]) --> false vì 1 không phải là số hoàn hảo

  isAllPerfectNumbers([1, 2, 3]) --> false

  isAllPerfectNumbers([6]) --> true vì 6 là số hoàn hảo

  isAllPerfectNumbers([6, 28]) --> true vì 6 và 28 đều là số hoàn hảo

  Viết hàm bằng 3 cách khác nhau:

  isAllPerfectNumbersV1(numberList) Sử dụng for...i với cách tiếp cận là return false nếu phát hiện có một số ko phải là số hoàn hảo.

  isAllPerfectNumbersV2(numberList) Sử dụng reduce() với cách tiếp cận là đếm số lượng số hoàn hảo, nếu nó bằng với length của array, nếu bằng thì return true, ngược lại return false

  isAllPerfectNumbersV3(numberList) Sử dụng every()
 */