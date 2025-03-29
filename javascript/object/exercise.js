/**
 * Get average mark of an object
 * calcAvgMark({ math: 10, english: 8, liter: 9 });
 */
function calcAvgMark(mark) {
  if (!mark) return -1;

  // avg = sum / length;
  const length = Object.keys(mark).length;
  let sum = 0;
  for (const key in mark) {
    const value = mark[key];
    sum += value;
  }

  return (sum / length).toFixed(1);
}
console.log("calcAvgMark", calcAvgMark({ math: 6.5, english: 8, liter: 7 }));
