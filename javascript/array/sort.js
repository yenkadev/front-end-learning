/**
 * Sắp xếp mảng với hàm sort()
 * - sort(compareFn) để sắp xếp mảng theo điều kiện mong muốn
 * - Nếu là null / undefined thì auto được cho xuống cuối mảng, null đứng trước, tới undefined
 * - Nếu hàm compareFn không được cung cấp, các phần tử sẽ được chuyển về strings để thực hiện so sánh
 * - Nếu compareFn(a, b) được cung cấp thì dựa vào kết quả của hàm để xác định:
 *       - KQ trả về < 0, a sẽ đứng trước b
 *       - KQ trả về = 0, a và b như nhau
 *       - KQ trả về > 0, a sẽ đứng sau b
 * - sort() sẽ trả về mảng sau khi sort (nhưng đây là mảng hiện tại, không phải mảng mới)
 */
const numberList = [1, 3, 2];
numberList.sort()
/**
 * Các thuật toán sắp xếp
 */