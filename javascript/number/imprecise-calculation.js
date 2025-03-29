/**
 * Imprecise Calculations
 * - Không phải số nào cũng được lưu chính xác trong Javasript
 * - Khi làm việc với số thực cần lưu ý về vấn đề xử lý cho đúng
 * - So sánh số thực bằng nhau thì dùng hằng số EPSILON hoặc toFixed() để làm tròn trước khi so sánh
 */
alert( 0.1 + 0.2 ); // 0.30000000000000004
console.log("0.3 === 0.1 + 0.2;", 0.3 === 0.1 + 0.2); // false
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
console.log((0.1 + 0.2).toFixed(1) === 0.3.toFixed(1));
// '0.3' === '0.3'

/**
 * Read more: https://javascript.info/number#imprecise-calculations
 */