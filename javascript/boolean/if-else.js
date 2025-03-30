/**
 * Control flow if...else
 * - Condition là một giá trị boolean
 * - Nếu condition là kiểu giá trị khác, nó sẽ tự động chuyển về boolean
 * - Hạn chế sử dụng else, bỏ được hãy bỏ bằng cách if return
 * - Hạn chế dùng nested if ... else
 */
if (condition) doSomething(); // GOOD
if (condition) {
  // GOOD
  doSomething();
  doSomethingElse();
}

if (condition) {
  doSomething();
} else {
  doSomethingElse();
}

if (condition) { // BAD
  doSomething();
} else if (anotherCondition) {
  doSomethingElse();
} else {
  doSomethingFinally();
}

if (condition1) {
  // Tránh nested if
  if (condition2) {
    doSomething();
  } else {
    doSomethingElse();
  }
}

/** Ex1
 * - Write a function to check if a number a positive even number
 * - If yes return true, otherwise return false
 */
// V1
function isPositiveEvenNumber(n) {
  let isValid;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}
console.log(isPositiveEvenNumber(5));

// V2
function isPositiveEvenNumber(n) {
  let isValid = false;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}
console.log(isPositiveEvenNumber(5));

// V3
function isPositiveEvenNumber(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }

  return false;
}
console.log(isPositiveEvenNumber(5));

// V4
function isPositiveEvenNumber(n) {
  return n > 0 && n % 2 === 0;
}
console.log(isPositiveEvenNumber(5));

/**
 * Ex2
 * - Write a function to classify student
 * - Receive mark as number, output:
 * - mark > 8 -> 'Excellence'
 * - 7 <= mark <= 8 -> 'Good'
 * - 4 <= mark <= 6 -> 'Not Good'
 * - mark < 4 -> 'Bad'
 */
// v1
function classifyStudent(mark) {
  let result;

  if (mark > 8) result = "Excellence";
  else if (mark >= 7) result = "Good";
  else if (mark >= 4) result = "Not Good";
  else result = "Bad";

  return result;
}

// v2
function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return "Invalid mark";
  if (mark > 8) return "Excellence";
  if (mark >= 7) return "Good";
  if (mark >= 4) return "Not Good";
  return "Bad";
}

/**
 * Read more: https://javascript.info/ifelse
 */
