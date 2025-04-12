/**
 * Tìm vị trí của student có id cho trước
  Viết hàm findStudentById(studentList, studentId) để tìm ra vị trí của student có id bằng với studentId.
  const studentList = [
  { id: 1, name: 'Learn' },
  { id: 2, name: 'Javascript' },
  ]
  findStudentById(studentList, 1); // 0
  findStudentById(studentList, 3); // -1
 */
function findStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;

  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].id === studentId) {
      return i;
    }
  }

  return -1;
}
