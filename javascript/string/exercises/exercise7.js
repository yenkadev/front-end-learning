/**
 * Trả về full name khi biết first và last name
  Viết hàm getFullName(firstName, lastName) nhận vào firstName và lastName và trả về chuỗi fullName.

  Quy tắc để tạo chuỗi fullName như sau:

  firstName và lastName là optional (có thể không có)

  fullName không có khoảng trắng thừa ở đầu và cuối chuỗi

  firstName và lastName cần phải viết hoa chữ cái đầu tiên, chữ cái còn lại là viết thường

  Ví dụ:

  getFullName('Alice') --> 'Alice'

  getFullName('Alice', '') --> 'Alice'

  getFullName('', 'Nguyen') --> 'Nguyen'

  getFullName('Bob', 'Tran') --> 'Bob Tran'

  getFullName('john', 'pHAm') --> 'John Pham'
 */

function getFullName(firstName, lastName) {
  if (firstName === undefined) firstName = "";
  if (lastName === undefined) lastName = "";
  if (firstName.length > 0) {
    firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  }
  if (lastName.length > 0) {
    lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  }
  return (firstName + lastName).trim();
}
