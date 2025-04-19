/**
 * Hoisting
 * - JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
 *                        Hoisting              Example                
 * var                       Yes                var count = 1;
 * const/let                 Yes                let name = "Js";
 * function declaration      Yes                function sayHi(){};
 * function expression       No                 const sum = function(){};
 */

/**
 * var hoisting
 */
console.log(num); // undefined from hoisted var declaration
var num; // Declaration
num = 10; // Initialization

console.log(count); // count is not defined
count = 20;

/**
 * function declaration hoisting
 * - Able to use function before declaration
 */
sum(5, 5); // 10
function sum(a, b) {
  return a + b;
}
sum(10, 20); // 30

console.log(sum2(5, 5)); // sum2 is not a function
var sum2 = function (a, b) {
  return a + b;
}
sum2(10, 20); // 30

var count = 100;
(function () {
  console.log("Js" + version()); // NaN

  function version() {
    return count * 2;
  }

  var count = 20;
})();


/**
 * const/let hoisting
 */
console.log(num3); // Cannot access 'num3' before initialization
let num3; // Declaration
num3 = 10; // Initialization

/**
 * var, const and let
 *                            var                  const               let
 * initializing               optional             required           optional
 * re-declare(same scope)     yes                  no                 no
 * re-assigned                yes                  no                 yes
 * scope                      function|global      block|global       block|global
 * hoisting                   yes                  yes                yes
 * when to use                                     ucvalue, const     cvalue
 * become a key of window     yes                  no                 no
 */
var name = "Js";
var name = ".Net";

function hi() {
  {
    const language = 'vi';
    const message = 'Hi';
  }
  console.log(language);
  console.log(message);
}





