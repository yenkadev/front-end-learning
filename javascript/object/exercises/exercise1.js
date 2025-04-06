/**
 * Viết hàm clone object nhưng không dùng spread operator
 * Viết hàm function cloneObject(obj) để clone một object obj truyền vào, và trả về là một object mới có đầy đủ các keys của object truyền vào.

  Ví dụ: 

  const studentA = { name: 'Bob', math: 9 };
  const studentB = cloneObject(studentA);
  
  console.log(studentA === studentB); // should be false
  console.log(studentB.name); // Bob
  console.log(studentB.math); // 9

  Lưu ý: Không sử dụng Object.assign() và spread operator
 */

const studentA = { name: 'Bob', math: 9 };

function cloneObject(obj) {
  const cloneObj = {};

  for (let key in obj) {
    cloneObj[key] = obj[key];
  }
  
  return cloneObj;
}

console.log(cloneObject(studentA));