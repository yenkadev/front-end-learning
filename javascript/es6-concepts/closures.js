/**
 * Closure
 * - A closure is a function having access to the parent scope, even after the parent function has closed.
 */

function init() {
  var name = "Js";
  function displayName() {
    alert(name);
  }
  return displayName;
}
const result = init();
result();

function createCounter(initValue = 0) {
  let value = initValue;

  function increase() {
    return value++;
  }

  function decrease() {
    return value--;
  }

  function getValue() {
    return value;
  }

  return {
    getValue,
    increase,
    decrease
  }
}
const resultCount = createCounter();
console.log("increase", resultCount.increase());
console.log("increase", resultCount.increase());