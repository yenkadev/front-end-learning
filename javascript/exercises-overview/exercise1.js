/**
 * Bài toán đổi tiền ATM đơn giản
  Viết hàm withdraw(amount) để giúp máy ATM biết trả ra bao nhiêu tờ tiền của các mệnh giá khác nhau.

  Giả sử máy ATM đang có 2 tờ 500k, 5 tờ 200k, 10 tờ 100k và 100 tờ 50k. (tổng tiền là 8 triệu đồng)

  Viết hàm nhận vào số tiền, trả về object với định dạng như sau:

  {
    k500: a,
    k200: b,
    k100: c,
    k50: d,
  }
  Trong đó a, b, c, d lần lượt là số lượng tờ tiền tương ứng đổi được.

  Lưu ý: ưu tiền đổi tiền lớn trước, khi hết tiền lớn mới dùng tiền nhỏ.

  Trường hợp máy ATM không đủ tiền, thì trả về chuỗi 'Insufficient balance from ATM'

  Số tiền nhận vào phải là bội số của 50.000đ, nếu sai thì trả về chuỗi 'Invalid balance'

  Ví dụ:

  withdraw(850000) --> { k500: 1, k200: 1, k100: 1, k50: 1 }

  withdraw(200000) --> { k500: 0, k200: 1, k100: 0, k50: 0}

  withdraw(125000) --> 'Invalid balance'

  withdraw(9000000) --> 'Insufficient balance from ATM'
 */
