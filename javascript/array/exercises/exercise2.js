/**
 * Kiểm tra số nguyên tố
  Viết hàm isPrime(n) nhận vào là số nguyên dương (0 <= n < 1000) và trả về kết quả true/false cho biết đó có phải là số nguyên tố hay không?

  Trả về true nếu là số nguyên tố

  Ngược lại, trả về false

  Số nguyên tố là số chỉ chia hết cho 1 và chính nó (hay nói cách khác là chỉ có 2 ước số là 1 và chính nó) (Wikipedia)

  Dãy số nguyên tố tham khảo: 2, 3, 5, 7, 11, 13, 17, ...

  isPrime(2) --> true

  isPrime(3) --> true

  isPrime(4) --> false vì 4 ngoài chia hết cho 1, nó còn chia hết cho 2

  Giải bài này bằng 2 cách:

  Cách 1 là lặp từ 2 tới n - 1 để kiểm tra isPrimeV1(n)

  Cách 2 là lặp từ 2 tới căn bậc 2 của n để kiểm tra isPrimeV2(n) (hãy suy nghĩ tại sao nhé)
 */
function isPrimeV1(n) {
  if (n < 0 || n > 1000) return -1;
  if (n < 2) return false; // So NT > 1
  for (let i = 2; i < n; i++) { // 2 3
    if (n % i === 0) return false; // So NT chia het cho 1 va chinh no
  }
  // 3 / 2 = 1.5
  return true; // 2 3
}

function isPrimeV2(n) {
  if (n < 0 || n > 1000) return -1;
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) { // 2 4
    if (n % i === 0) return false;
  }
  return true; // 2 // 3
}
