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