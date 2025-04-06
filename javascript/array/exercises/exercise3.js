/**
 * Liệt kê ước số của số nguyên dương n
  Viết hàm getDivisorList(n) nhận vào số nguyên dương (1 <= n <= 1000) và trả về một mảng các ước số của n.

  Ví dụ:

  getDivisorList(1) --> [1]

  getDivisorList(10) --> [1, 2, 5, 10]

  getDivisorList(12) --> [1, 2, 3, 4, 6, 12]

  Hãy viết hàm này bằng 3 cách tiếp cận:

  Sử dụng for...i từ 1 tới n getDivisorListV1(n)

  Sử dụng Array.from() và filter() để lặp từ 1 tới n getDivisorListV2(n)

  Sử dụng Array.from(), forEach() và sort(). Đồng thời chỉ lặp đến căn bậc 2 của n getDivisorListV3(n)
 */
function getDivisorListV1(n) {
  if (n < 1 || n > 1000) return [];

  const result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  return result;
}

function getDivisorListV2(n) {
  if (n < 1 || n > 1000) return [];
  return Array.from({ length: n }, (item, index) => (index + 1)).filter((item) => n % item === 0);
}
console.log(getDivisorListV2(10));
