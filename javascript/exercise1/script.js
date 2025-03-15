function tinhDiemTB(toan, ly, hoa) {
  const note = "diem nhap khong hop le";
  if (toan < 0 || toan > 10) {
    return note;
  }
  if (ly < 0 || ly > 10) {
    return note;
  }
  if (hoa < 0 || hoa > 10) {
    return note;
  }
  return (toan + ly + hoa) / 3;
}

function xepLoai(diemTB) {
  if (diemTB >= 9) {
    return "Xuất sắc";
  } else if (diemTB >= 8) {
    return "Giỏi";
  } else if (diemTB >= 7) {
    return "Khá";
  } else if (diemTB >= 6) {
    return "Trung bình";
  } else {
    return "Yếu";
  }
}

var diemTB = tinhDiemTB(7, 8, 9);
console.log(xepLoai(diemTB));

// console.log(xepLoai(7, 8, 9));
// console.log(xepLoai(7, 0, 9));
// console.log(xepLoai(1, 4, 9));
// console.log(xepLoai(10, 8, 9));
