/**
 * Comparison operators
 * - So sánh cùng kiểu dữ liệu
 * - So sánh khác kiểu dữ liệu
 * - So sánh với null/undefined 
 */

/**
 * Các phép so sánh
 * - > < : lớn/nhỏ hơn
 * - >=, <= : lớn/nhỏ hơn hoặc bằng  
 * - == : bằng nhau
 * - != : không bằng nhau
 * - === : bằng nhau (kiểm tra cả kiểu và giá trị)
 * - !==: không bằng nhau (kiểm tra cả kiểu và giá trị)
 * => Kết quả các phép so sánh trên là boolean (true/false) 
 */

/**
 * Ví dụ:
 * A                  B                 Result
 * 1       <          2                 TRUE
 * 1       >=         2                 FALSE
 * '2'     ==         '1'               FALSE
 * '2'     >          '1'               TRUE
 * 3       ==         '3'               TRUE
 * 4       ===        '4'               FALSE
 * null    ==         undefined         TRUE // vì nó kg dc gán cho giá trị nào hết
 * null    ==         0                 FALSE
 * null    >=         0                 TRUE
 * ''      ==         0                 TRUE  
 */

/**
 * So sánh cùng kiểu dữ liệu
 * - So sánh số (number)
 * - So sánh chuỗi (string)
 * - So sánh boolean
 * - So sánh object / array
 */

/**
 * So sánh số (number)
 */
1 > 2; // false
1 < 2; // true

1 >= 2; // false
2 <= 2; // true

1 == 2; // false
1 != 2; // true

/**
 * So sánh string
 * - So sánh theo từng ký tự một, từ trái sang phải theo bảng UTF-16
 * - Nếu kí tự đầu tiên lớn hơn, thì string đó lớn hơn.
 * - Nếu kí tự đầu tiên nhỏ hơn, thì string đó nhỏ hơn.
 * - Nếu kí tự đầu tiên giống nhau thì đi kiểm tra tiếp kí tự tiếp theo.
 * - Tiếp tục cho đến khi hết chuỗi.
 */
'a' > 'b'; // false
'aa' <= 'b'; // true
'abc' > 'abd'; // false

'a' > 'A'; // true
'A' > '9'; // true

console.log('abc' > 'abd');

'medium' != 'easy'; // true
'medium size' > 'easy'; // true
console.log("'medium size' > 'easy'", 'medium size' > 'easy');

/**
 * So sánh boolean
 * - Giá trị boolean: true/false
 * - true > false 
 */
true > false // true
true == true // true
true == false // false
true != false // true

/**
 * So sánh object / array
 * - Object không thể so sánh lớn/nhỏ hơn hay bằng được
 * - Thường được định nghĩa một hàm riêng đặc biệt để xử lý việc so sánh
 * - Còn về so sánh bằng thì mình cần biết thêm về tham trị và tham chiếu
 */
const student1 = { name: 'Yen' };
const student2 = { name: 'Yen' };
console.log("so sanh object: ", student1 == student2); // false

/**
 * So sánh khác kiểu dữ liệu
 * - Js sẽ tự động convert giá trị về dạng number để so sánh
 */
123 == '123' // true
123 == '0123' // true vì 01 được convert sang 1
false == 0 // true vì false được convert sang 0
true == 1 // true vì được convert sang 1
'0' == false // true vì false được convert sang 0
'2' > true // true vì true được convert sang 1
'123' >= 100 // false vì '123' được convert sang 123

/**
 * Strict equality (=== and !==)
 * - Giữ nguyên giá trị (không tự động convert kiểu dữ liệu) và so sánh với nhau
 * - Nên sử dụng === thay vì ==
 */
111 === '111' // false
0 === false // false
'' === 0 // false
1 === 1 // true
'abc' === 'abc' // true

/**
 * So sánh với null/undefined
 */
null == undefined; // true
null === undefined; // false
null > 0 // false
null == 0 // false
null >= 0 // true

/**
 * Read more:
 * - https://asecuritysite.com/coding/asc2
 * - https://getify.github.io/coercions-grid/
 * - https://javascript.info/comparison
 * - https://dorey.github.io/JavaScript-Equality-Table/unified/
 */




