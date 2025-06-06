/**
  * Kiểm tra có student giới tính là Nữ tên Alice không
  Viết hàm hasAlice(studentList) để kiểm tra trong mảng studentList có student nữ nào tên là Alice không?
  (không phân biệt hoa thường)
  const studentList = [
  { id: 1, name: 'Alice', gender: 'male' },
  { id: 2, name: 'aliCE', gender: 'female' },
  { id: 3, name: 'Learn Javascript', gender: 'male' },
  ];
  hasAlice(studentList); // true
 */

function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  return studentList.some(
    (student) =>
      student.name.toLowerCase() === 'alice' &&
      student.gender.toLowerCase() === 'female'
  );
}
