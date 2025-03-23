/**
 * slice: Thì hỗ trợ số âm. Số âm thì được đếm ngược từ cuối chuỗi. Không ccho phép start > end
 * substring: Xem số âm là số 0. Cho phép start > end
 */

// Slice
'Javascript course'.slice(0, 5); // Javas
console.log("", 'Javascript course'.slice(0, 5));
'Javascript course'.slice(2); // vascript course
'Javascript course'.slice(-2);
console.log('Javascript course'.slice(-2));
console.log('Javascript course'.slice(-4, -1));
console.log('Javascript course'.slice(6, 1)); // ''

// Substring
'Javascript course'.substring(0, 5); // Javas
'Javascript course'.substring(2); // vascript course
'Javascript course'.substring(-2); // Javascript course
'Javascript course'.substring(-4, -1); // 
console.log('Javascript course'.substring(-4, -1)); // ''
console.log('Javascript course'.substring(6, 1)); // avas


