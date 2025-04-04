/**
 * Array destructuring
 */

// object destructuring
const student3 = { 
  name: "Js course" ,
  age: 20
}

const { name, age } = student3; // recommended
console.log("student3", student3);

// array destructuring
const numberList = [1, 2, 3, 4, 5, 6];
const [first, second, third] = numberList;

// rest operator (...)
const [first1, second1, third1, ...rest] = numberList; 
