/**
 * Một số lưu ý cho function
 */

/**
 * 1. Default parameter value
 */
function sum(a = 0, b = 0) {
  return a + b; 
}
sum(); // 0
sum(5); // 5
sum(5, 5); // 10
sum(undefined, undefined); // 0
sum(undefined, null); // 0 + 0 null converted to 0

/**
 * 2. Rest parameter
 */
// ES5
function sum1() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) { // arguments objects
    sum += arguments[i];
  }
}

console.log(sum1(1)); // 1
console.log(sum1(1, 2)); // 3
console.log(sum1(1, 2, 3)); // 6

// ES6
function sum2(...numberList) {
  return numberList.reduce((total, number) => total + number);
}

console.log(sum2(1)); // 1
console.log(sum2(1, 2)); // 3
console.log(sum2(1, 2, 3)); // 6
console.log(sum2(1, 2, 3, 4)); // 10

/**
 * Spread operator
 */
function sum3(...numberList) {
  return numberList.reduce((total, number) => total + number);
}
const numberList = [1, 2, 3, 4];
sum3(...numberList); // 1, 2, 3

/**
 * Arrow function
 */
const sum = (a, b) => {
  return a + b;
}

const sum2 = (a, b) => a + b;

const sum3 = (a, b) => ({ a, b }); // { a, b }

/**
 * Curry function/Higher Order Function(HOF)
 */
sum(1)(2); // 3
function sum(x) {
  return function (y) {
    return x + y;
  }
}

function generateId(id = 0) {
  let idx = id;

  return function () {
    return idx++
  }
}
const result = generateId(10);
result(); // 






