/**
 * 1. Tổng quan về object
 * 2. Một số thao tác cơ bản với object
 * 3. Tham trị và tham chiếu
 * 4. Duyệt key của object
 * 5. Coding exercise
 */

/**
 * Khai báo object
 * - Kiểu dữ liệu có thể chứa nhiều dữ liệu khác nhau thông qua các cặp ky, value
 * - value: Có thể là kiểu dữ liệu bất kỳ (number, string, boolean, array, function, ...)
 */
// {
//   key1: value1,
//   key2: value2
//   ...
// }

const student = {
  id: 20056,
  name: 'Yen Ka',
  position: 'Developer',
  age: 28,
  'Key have space': 'Special key',
  sayHello() {
    console.log('Hi');
  },
};

/**
 * Lấy value của key
 * - Dùng dot operator để truy cập key của object
 * - Dùng square brackets để truy cập dynamic key của object, kể cả key có space
 */
console.log(student.id);
console.log(student.name);
console.log(student.position);
console.log(student.age);
console.log(student['Key have space']);
console.log('student.sayHello()', student.sayHello);

/**
 * Thêm key mới cho object
 */
const student2 = {
  id: 20056,
  name: 'Yen Ka',
  position: 'Developer',
  age: 28,
  'Key have space': 'Special key',
  sayHello() {
    console.log('Hi');
  },
};

// Set new key
const key = 'avg mark';
student2[key] = 10;
console.log('student2', student2);

// Update new key
student2.name = 'Dong Ka';

/**
 * Xóa một key
 * - Để xóa một key khỏi object hiện tại thì dùng delete operator
 */
const student3 = {
  id: 20056,
  name: 'Yen Ka',
  position: 'Developer',
  age: 28,
  'Key have space': 'Special key',
  sayHello() {
    console.log('Hi');
  },
};

delete student3.age;
console.log('student3', student3);
console.log('student3.age', student3.age); //undefined
