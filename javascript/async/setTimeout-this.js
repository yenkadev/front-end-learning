/**
 * setTimeout with this
 * 1. Issues
 * 2. Solution: use a wrapper function
 * 3. Solution: use bind()
 */

/**
 * 1. Issues
  - Không thể bind this cho setTimeout.
  - this trong callback function của setTimeout default là global object (window)
 */
const student = {
  name: "Javascript course",
  sayHello() {
    console.log("NAME", this.name);
    console.log("THIS", this);
  },
};
student.sayHello(); // 'Javascript course'
setTimeout(student.sayHello);
// this is window, not student
setTimeout.call(student, student.sayHello);
// Uncaught TypeError: Illegal invocation
