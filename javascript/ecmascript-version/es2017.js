/**
 * ECMAScript 2017
 *  Key             Value
    Name            ECMAScript 2017
    Short name      ES2017
    Was finalized   in June 2017
 */

/**
 * Feature list
  # Feature                              Desc
  1 MAJOR Async functions                higher level abstraction over promises
  2 MAJOR Shared memory and atomics      shared memory between multiple workers
  3 String padding                       add characters to reach a specific length. source
  4 Object.values()                      get an array of object values
  5 Object.entries()                     get an array of pair [key, value]
  6 Object.getOwnPropertyDescriptors()   get object property descriptor
  7 Trailing commas                      in function parameter lists and calls
 */

/**
 * 1. MAJOR Async functions
  - The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style.
  - Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 */
function main() {
  getAllStudents()
    .then((response) => {
      const { data, pagination } = response;
      console.log(data, pagination);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function main() {
  try {
    const response = await getAllStudents();
    console.log(data, pagination);
  } catch (error) {
    console.log(error);
  }
}

/**
 * 2. MAJOR Shared memory and atomics
  - Since ES2017, you can create a shared memory array between web workers and their creator, using a SharedArrayBuffer
  - Read more: https://flaviocopes.com/es2017/#shared-memory-and-atomics
               https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md
 */

/**
 * 3. String padding
  - pad = add character until it reach a specific length.
  - default pad character is space
 */
"1234".padStart(8);
"1234".padStart(8, "*");
"123456".padStart(8, "*");
"1234".padEnd(8, "*");
"12".padEnd(8, "*");

/**
 * 4. Object.values()
 */
Object.values({
  id: 1,
  name: "Js course",
  age: 18,
});

/**
 * 5. Object.entries()
 */
Object.entries({
  id: 1,
  name: "Js course",
  age: 18,
});

/**
 * 6. Object.getOwnPropertyDescriptors()
 * - Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
 */

/**
 * 7. Trailing commas in function parameter lists and calls
 */
// Trailing commas in Array
[1, 2, 3,].length;
[1, 2, 3,,].length;
const numberList = [1, 2, 3,];
console.log(numberList);

// Trailing commas in object (from ECMAScript 5)
const student = {
 id: 1,
 name: 'Js course',
 age: 18, // <-- trailing comma
}

// Trailing commas in functions (from ECMAScript 2017)
// function declaration
function createStudent({
 id,
 name,
 age,
 hobbies,
 isHero, // trailing comma
}) {
 console.log(id, name, age, hobbies, isHero);
}
// function call
createStudent({
 id: 1,
 name: 'Easy Frontend',
 age: 18,
 hobbies: ['music', 'coding'],
 isHero: false, // trailing comma
})

/**
 * Read more:
  https://pawelgrzybek.com/trailing-comma-in-ecmascript2017-function-parameter-list/
  https://flaviocopes.com/es2017/
  https://exploringjs.com/es2016-es2017/ch_trailing-comma-parameters.html
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
  https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md
 */