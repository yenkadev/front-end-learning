/**
 * Kiểu so sánh
 * So sánh cùng kiểu dữ liệu
 * So sánh khác kiểu dữ liệu
 * So sánh với null/undefined 
 */

/**
 * Các phép so sánh
 * 1. > <
 * 2. >=, <=
 * 3. ==
 * 4. !=
 * 5. === 
 * 6. !==
 */


/**
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
 * So sánh số
 */
1 > 2; // false

/**
 * So sánh string
 * So sánh theo từng ký tự một, từ trái sang phải
 */

'a' > 'b'; // false
'aa' <= 'b'; // true
'abc' > 'abd'; // false

'a' > 'A'; // true
'A' > '9'; // true

console.log("'a' > 'A'", 'a' > 'A');

'medium' != 'easy'; // true
'medium size' > 'easy'; // true
console.log("'medium size' > 'easy'", 'medium size' > 'easy');