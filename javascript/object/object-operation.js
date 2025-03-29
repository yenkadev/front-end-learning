/**
 * Một số thao tác cơ bản với object
 */

/**
 * Đặt tên key
 * - Với tên biến/tên function thì không được dùng reserved keywords
 * - Tên key thì thoải mái, kể cả reserved keywords nhưng không khuyến khích
 */

/**
 * Property value shorthand
 */
const name = "John";
const age = 20;

const student = {
  name: name,
  age: age
}

const student2 = { // recommended
  name,
  age
}

/**
 * Object destructuring
 */
const student3 = { 
  name,
  age
}

const name2 = student3.name;
const age2 = student3.age;

const { name: name3, age: age3 } = student3; // recommended
console.log("student3", student3);

/**
 * Kiểm tra key có trong object không
 * - Dùng in operator để kiểm tra key có tồn tại trong object không
 */
const student4 = { 
  name,
  age
}
console.log("'name' in student4", 'name' in student4);
console.log("'age' in student4", 'age' in student4);
console.log("'mark' in student4", 'mark' in student4)
