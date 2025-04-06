/**
 * Tìm 2 số trong mảng có tổng bằng một số cho trước
  Viết hàm findSumPair(numberList, targetSum) để tìm ra 2 số trong mảng numberList có tổng bằng targetSum

  Lưu ý:

  numberList có thể không phải là mảng

  Trường hợp không tìm thấy 2 số thoả yêu cầu thì trả về mảng rỗng

  Trường hợp tìm thấy 2 số thoả yêu cầu thì trả về mảng chứa 2 số đó và sắp xếp tăng dần.

  Ví dụ:

  findSumPair({}); // []
  findSumPair([], 10); // []
  findSumPair([1, 2], 2); // [] vì không có 2 số nào có tổng bằng 2
  findSumPair([3, 2, 1], 5); // [2, 3] vì 2 + 3 = 5 và sắp xếp tăng dần nên có mảng [2, 3]
  findSumPair([3, 3, 1, 2], 6); // [3, 3]
 */