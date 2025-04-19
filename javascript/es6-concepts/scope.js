/**
 * Scope overview
 * - Block scope
 * - Function scope
 * - Lexical scope
 * - Global scope
 * - Scope chain
 */

/**
 * Scope overview
 * what: limits in which a variable exist
 * why: understand when and where we can access to a varibale
 * when: declare a variable
 */

/**
 * Block scope
 * - Limit in pair of curly brackets {}
 * - const/let has block scope (ES6)
 */
{
  const name = "Javascript course";
}
console.log("name", name);

{
  {
    const name = "Javascript course";
  }
  console.log("name", name);
}

const counter = 20;
if (counter > 10) {
  const name = "Javascript course";
}
console.log("name", name);

for (let i = 0; i < 10; i++) {
  const name = "Javascript course";
  console.log("name", name);
  var name2 = "Javascript course";
  
}

console.log("name2", name2);

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    const isDivisibleToTwo = true;
  }
  console.log("isDivisibleToTwo", isDivisibleToTwo);
}
console.log("isDivisibleToTwo", isDivisibleToTwo);

/**
 * Function scope
 * - Limit into current function only
 */
function sayHi() {
  const name = "Javascript course";
  console.log("name", name); 

  function printAge() {
    const age = 18;
    console.log("age", age);
    console.log("name", name);
  }

  printAge();
  console.log("age2", age);
}
sayHi();
console.log("name", name);

/**
 * Lexical scope
 * - Lexical scope is the ability for a function scope to access variables from the parent scope.
 */
const name = "Javascript course";
function sayHi() {
  const language = "vn";
  console.log("name", name); // lexical scope of name is global scope 

  function printLanguage() {
    console.log("language", language); // lexical scope of language is a function scope 
  }
}

/**
 * Global scope
 * - Can be accessed anywhere
 * - Declare variable not inside any function
 *                           Browser                Nodesjs
 * global object              window                 global
 * // globalThis
 */
let count = 1;
const name2 = "Javascript course";
console.log("globalThis", globalThis);

/**
 * Scope chain
 * - A scope chain refers to the unique spaces that exist from the scope where a variable got called to the global scope.
 */
// First fullName variable defined in the global scope:
const fullName = "Oluwatobi Sofela";
// Nested functions containing two more fullName variables:
function profile() {
  const fullName = "Tobi Sho";
  function sayName() {
    const fullName = "Oluwa Sofe";
    function writeName() {
      console.log("fullName1", fullName);
      return fullName;
    }
    return writeName();
  }
  console.log("fullName2", fullName);
  return sayName();
}
console.log("fullName3", fullName);

/**
 * Scope
 * var                      const                    let
 * function or global       block or global          block or global
 */
var name1 = "Js";
const name2 = "Js";
let name3 = "Js";

function definedScope() {
  if (true) {
    var name1 = "Js";
    const name2 = "Js";
    let name3 = "Js";
  }
  console.log("name1", name1);
  console.log("name2", name2);
  console.log("name3", name3);
}

