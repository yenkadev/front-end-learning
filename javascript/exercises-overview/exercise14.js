/**
 * Kiểm tra mảng có phải là dạng "mountain" array không?
  Viết hàm validMountainArray(numberList) nhận vào mảng số nguyên. Trả về true nếu mảng là MountainArray, ngược lại trả về false.

  Mảng được gọi là MountainArray khi và chỉ khi:

  + Mảng đó có ít nhất 3 phần tử

  + Tồn tại số nguyên i, 0 < i < numberList.length - 1 sao cho

  numberList[0] < numberList[1] < ... < numberList[i - 1] < numberList[i]

  và numberList[i] > numberList[i + 1] > ... > numberList[numberList.length - 1].

  --> tức nôm na i là đỉnh và giảm dần về đầu và cuối mảng.

  Ví dụ:

  - validMountainArray([1]) -> false

  - validMountainArray(1) -> false

  - validMountainArray([3, 5, 5]) -> false

  - validMountainArray([0,1,2]) -> false

  - validMountainArray([0,3,2,1]) -> true
 */