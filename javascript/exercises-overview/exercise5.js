/**
  * Viết hàm countWords(str) nhận vào là một chuỗi và trả về số từ có trong câu.

  Một từ được tính là nếu có ít nhất một ký tự (a-z, A-Z), còn nếu chỉ có toàn khoảng trắng thì không tính là một từ.

  Ví dụ:

  countWords('') --> 0

  countWords('js') --> 1

  countWords('js frontend') --> 2

  countWords('   js     frontend     ') --> 2 (lưu ý câu này có nhiều khoảng trắng thừa)
 */

function countWords(str) {
  if (typeof str !== 'string' || str.length === 0) return 0;
  const words = str.trim().split(/\s+/); // Split by whitespace and remove extra spaces
  return words.filter((word) => /[a-zA-Z]/.test(word)).length; // Filter words that contain at least one letter
}
