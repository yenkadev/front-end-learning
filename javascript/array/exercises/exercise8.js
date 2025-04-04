/**
 * Tính trung bình cộng của các số chẳn trong mảng
  Viết hàm calcAvgOfAllEvenNumbers(numberList) nhận vào là một mảng số nguyên dương.

  Trả về một con số duy nhất cho biết trung bình cộng của tất cả số sẵn có trong mảng, nếu kết quả là số thực thì làm tròn về số nguyên gần nhất.

  Ví dụ:

  calcAvgOfAllEvenNumbers(1) --> 0 vì dữ liệu đầu vào không hợp lệ

  calcAvgOfAllEvenNumbers([]) --> 0

  calcAvgOfAllEvenNumbers([1]) --> 0

  calcAvgOfAllEvenNumbers([1, 2]) --> 2

  calcAvgOfAllEvenNumbers([1, 2, 4]) --> 3 vì có 2 số chẳn 2 + 4 = 6, trung bình cộng lấy 6 / 2 = 3

  calcAvgOfAllEvenNumbers([1, 2, 4, 8]) --> 5 vì có 3 số chẳn 2 + 4 + 8 = 14, trung bình cộng lấy 14 / 3 = 4.6(6), làm tròn thành 5
 */