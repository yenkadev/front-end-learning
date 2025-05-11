/**
 * ECMAScript 2019
 *  Key              Value
    Name            ECMAScript 2019
    Short name      ES2019
    Was finalized   in June 2019
 */

/**
 * Feature list
  # Name Desc
  1 MAJOR Array.prototype.{flat, flatMap}: flatten array
  2 MAJOR Object.fromEntries: create object from entries
  3 String.prototype.{trimStart, trimEnd}: trim whilte spaces
  4 Symbol.prototype.description: add desc to a Symbol
  5 Optional catch binding: a way to omit the error in catch
  6 Array.prototype.sort(): is guaranteed to be stable  keep same order for equal items
  7 Revised Function.prototype.toString(): keep original function declaration including comments, spaces
 */

/**
 * 1. Array.prototype.{flat, flatMap}
 */
// - arr.flat(depth) - default depth is 1
[1, 2, [3, 4]].flat(0);
[1, 2, [3, 4]].flat(1);
[1, 2, [[3], 4]].flat(1);
[1, 2, [[3], 4]].flat(2);
[1, 2, , 4, 5].flat();

// - arr.flatMap(mapFn) - similar to the call map() first, then flat(1). But slightly more efficient
[5, 20].map((x) => [x, x * 2]).flat(1);
[5, 20].flatMap((x) => [x, x * 2]);

/**
 * 2. Object.fromEntries
   - Create new object from entries.
 */
const student = {
  id: 1,
  name: "Javascript learning",
};

// ES2017
const entries = Object.entries(student);
// ES2019
Object.fromEntries(entries);

/**
 * 3. String.prototype.{trimStart, trimEnd}
   - Easy to remove redundant whitespaces at the beginning / end of a string
 */
// ES5
" Javascript learning ".trim();
// ES2019
"Javascript learning".trimStart();
" Javascript learning ".trimStart();
"Javascript learning".trimEnd();
" Javascript learning ".trimEnd();

/**
 * 4. Symbol.prototype.description
 */
const sym = Symbol("description goes here");
sym.description;
sym.toString();

/**
 * 5. Optional catch binding
   - Able to omit the error in catch clause if we don't need it
 */
function parseStudentFromJSON(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    // in case of failed to parse, simply return undefined
    return undefined;
    // error is unused
  }
}

function parseStudentFromJSON(str) {
  try {
    return JSON.parse(str);
  } catch {
    // in case of failed to parse, simply return undefined
    return undefined;
  }
}

/**
 * 6. Array.prototype.sort() is guaranteed to be stable
   - Guaranteed to keep the same order for equal items.
 */
[
  { id: 1, name: "Alice" },
  { id: 3, name: "John" },
  { id: 2, name: "Bob" },
  { id: 4, name: "Alice" },
].sort((s1, s2) => {
  if (s1.name > s2.name) return 1;
  if (s1.name < s2.name) return -1;
  return 0;
});

/**
   7. Revised Function.prototype.toString()
   - ES2019 introduced a change to the return value to avoid stripping comments and other characters like whitespace, exactly representing the function as it was defined.
*/
// BEFORE
bar.toString(); //'function bar() {}
// ES2019
bar.toString(); // 'function /* this is bar */ bar () {}
// for built-in function
Math.trunc.toString();
// function trunc() { [native code] }
