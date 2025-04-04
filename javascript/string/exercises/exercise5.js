/**
 * Rút trích domain từ địa chỉ email
  Viết hàm extractDomain(email) nhận vào địa chỉ email, trả về phần domain sau ký tự @

  Ví dụ:

  extractDomain('')  --> ''

  extractDomain('alice@gmail.com')  --> 'gmail.com'

  extractDomain('bobabc.com') --> 'abc.com'

  Viết hàm theo 2 hướng tiếp cận:

  extractDomainV1(email) Sử dụng split

  extractDomainV2(email) Sử dụng indexOf() và slice()
 */

function extractDomain(email) {
  const atIndex = email.indexOf("@");
  console.log("atIndex", atIndex);
  if (atIndex === -1) return "";
  return email.slice(atIndex + 1);
}
console.log("extractDomain", extractDomain('bobabc.com@'))
