/**
 * Tham trị và tham chiếu
 * - Primitive type/Value type (boolean, number, string, null, undefined, symbol)
 * - None-Primitive/Reference type (object, array, function)
 */

/**
 * Phân biệt tham trị và tham chiếu
 */
const name = "Javascript course";
const age = 18;
const isValidUser = true;
const selectedUser = null;

name = "Javascript course" // Lưu vào chung ô nhớ

// Reference type: Variable lưu address/ref của giá trị
const student = {
  id: 20056,
  name: "Yen Ka",
  position: "Developer",
  age: 28,
  'Key have space': "Special key",
  sayHello() {
    console.log("Hi");
  }
}
/**
 * student = 20056 -> address: 20056; value: {
                                        id: 20056,
                                        name: "Yen Ka",
                                        position: "Developer",
                                        age: 28,
                                        'Key have space': "Special key",
                                        sayHello() {
                                          console.log("Hi");
                                        }
                                      }
 */

/**
 * Phép gán với object
 */
const a = 10;
let b = a;
b = 15;

const student2 = student;
student2.name = "Dong Ka";
console.log("student2", student2);
console.log("student", student);

/**
 * So sánh object
 * - Khi so sánh tham chiếu (object, array, function) thì địa chỉ tham chiếu sẽ được đưa ra để so sánh. Nếu cùng trỏ về một địa chỉ tham chiếu thì sẽ trả về true, ngược lại lại false
 */
const student3 = { name: "Js course" };
const student4 = student3;
console.log(student3 === student4);

/**
 * Pass by value vs Pass by reference
 */
let name2 = "John";
let age2 = 18;
function changePrimitive(name, age) {
  name = "Js course";
  age = 20;
  return `name: ${name} \n age: ${age}`
}
console.log(changePrimitive(name2, age2)); // name: Js course \n age: 20
console.log("name2", name2); // John
console.log("age2", age2); // 18

function changeReference(student) {
  student.name = "Js course";
  student.age = 20;
}
const student5 = {
  name: "John",
  age: 18
}
changeReference(student5);
console.log("student5.age", student5.name); // "Js course"
console.log("student5.age", student5.age); // 20


