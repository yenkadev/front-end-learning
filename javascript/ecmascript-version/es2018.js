/**
 * ECMAScript 2018
 *  Key              Value
    Name             ECMAScript 2018
    Short name       ES2018
    Was finalized    in June 2018
 */

/**
 * Feature list
  # Name                                       Desc
  1 MAJOR Rest/Spread properties for objects   similar to rest/spread element for array (ES6)
  2 MAJOR Asynchronus iteration                for-await-of
  3 Promise.prototype.finally()                always run no matter failed or success
  4 Regular Expression improvements            leave it for now, will get back to this in regex section
 */

/**
 * 1. Rest/Spread properties for objects
 */
// ES6 / Rest element
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// ES6 / Spread element
const numberList1 = [1, 2, 3];
const numberList2 = [4, 5, 6];
const mergedList = [...numberList1, ...numberList2, 7, 8, 9];

// ES2018 introduces the same but for objects.
// ES2018 / Rest properties
const student = {
  id: 1,
  name: "Javascript course",
  isHero: false,
};
const { id, ...rest2 } = student;

// ES2018 / Spread properties
const alice = {
  id: 1,
  name: "Alice",
};
const bob = {
  ...alice,
  name: "Bob",
};

/**
 * 2. Asynchronus iteration
 */
// Syntax: for-await-of
async function fetchData() {
  const studentList = [];
  const pageList = [1, 2, 3, 4];
  for await (const page of pageList) {
    const url = `https://js-post-api.herokuapp.com/api/students?
_page=${page}`;

    console.log("-------------");
    console.log("Start", new Date().getTime(), url);
    const response = await fetch(url);
    const responseJSON = await response.json();
    studentList.push(responseJSON.data);
    console.log("End", new Date().getTime(), studentList);
  }
}
fetchData();

/**
 * 3. Promise.prototype.finally()
 */
fetch("file.json")
  .then((data) => data.json())
  .catch((error) => console.error(error))
  .finally(() => console.log("finished"));

/**
 * Read more:
 * https://flaviocopes.com/es2018/
 * https://exploringjs.com/es2018-es2019/toc.html
 */
