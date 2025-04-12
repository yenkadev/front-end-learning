/**
 * Tìm tất cả các số mà bắt đầu bằng chữ số lẻ
  Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số có chữ số đầu tiên là chữ số lẻ.
  findAllNumbers([1, 5, 6]); // [1, 5]
  findAllNumbers([234, 421, 123]); // [123]
 */

function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  return numberList.filter((number) => {
    const firstDigit = Number(String(number).charAt(0));
    return firstDigit % 2 !== 0;
  });
}
