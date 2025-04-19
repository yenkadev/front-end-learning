/**
 * Object
 */
const id = 1;
const name = 'Js';
const age = 18;

const student = {
  id: id,
  name: name,
  age: age,
  isStudent: true
}

// Shorthand version
const student2 = {
  id,
  name,
  age,
  isStudent: true
}

student2['Js course'];

/**
 * Method
 */

const student3 = {
  id,
  name,
  age,
  isStudent: true,
  sayHi: function () {
    // ES5
  },
  sayHi2() {
    // ES6
  }
}

/**
 * Desctructuring
 */

const { id: id1, name: name1 } = student3;
let x = 10;
y = 20;
[y, x] = [x, y];

/**
 * Object.assign()
 */
const a = { id: 1 }; // address 
const b = { name: "Js" };
const c = Object.assign({}, {age: 1});
console.log(a === c); // true
const alice = {
  ...student3,
  name6: "Alice"
}


