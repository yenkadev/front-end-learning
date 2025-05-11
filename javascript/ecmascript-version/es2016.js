/**
 * ECMAScript 2016
 *  Key                 Value
    Name                ECMAScript 2016
    Short name          ES2016 / ES7
    Was finalized in    June 2016
 */

/**
 * Feature list
  # Name                          Desc
  1 Array.prototype.includes()    new method for Array to check if an item is existed
  2 Exponentiation Operator       similar to Math.pow()
 */

/**
 * 1. Array.prototype.includes()
 */
[1, 2].includes(1);
[1, 2].includes(2);
[1, 2].includes(3);

['js', 'course'].includes('js');
['js', 'course'].includes('course');
['js', 'course'].includes('js course');

/**
 * 2. Exponentiation Operator
  - The ** operator is standardized across many languages including Python, Ruby, MATLAB, Lua, Perl and many others
 */
Math.pow(2, 3); // ES5
console.log(2 ** 3);

/**
 * Read more: https://flaviocopes.com/es2016/
 */