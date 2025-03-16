/**
 * Nếu điều kiện là tập các giá trị xác định 
 * Nếu điều kiện là dạng khoảng (lớn/bé hơn)
 */

function printMonth(n) {
  let month = '';
  console.log("n", n);
  
  switch (true) {
    case (n >= 1 && n <= 4):
      month = 'Quy 1';
      break;
    case (n >= 5 && n <= 8):
      month = 'Quy 2';
      break;
    case (n >= 9 && n <= 12):
      month = 'Quy 3';
      break;
    default:
      month = 'Kg thuoc quy nao';
  }

  return month;
}

console.log(printMonth(7));
