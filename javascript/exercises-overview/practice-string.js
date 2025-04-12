/**
 * Thống kê số lượng từ trong câu
  Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str.
  Trả về một object với:
  key là từ có xuất hiện trong str
  value là số lần xuất hiện của key
  Ví dụ:
  statisticsWords('learn javascript')
  // should return an object like this:
  // { learn: 1, javascript: 1 }
 */
function statisticsWords(str) {
  if (typeof str !== 'string' || str.length === 0) return {};

  const words = str.split(' ');
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  return result;
}
