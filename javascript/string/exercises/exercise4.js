/**
 * Kiểm tra URL có sử dụng phương thức bảo mật
  Viết hàm isSecureUrl(url) nhận vào là một url và trả về true nếu url có sử dụng phương thức bảo mật, ngược lại trả về false.

  Quy ước URL được xem là có sử dụng phương thức bảo mật nếu bắt đầu bằng:

  https

  wss

  Tạm thời bỏ qua việc kiểm tra url có hoàn chỉnh hay không, chỉ quan tâm phương thức bảo mật.

  Ví dụ:

  isSecureUrl('http://abc.com') --> false vì bắt đầu bằng http, ko phải là https

  isSecureUrl('https://jsfrontend.com') --> true

  isSecureUrl('wss://chat.jsfrontend.com') --> true

  isSecureUrl('ws://chat.abc.com') --> false

  Viết bằng 2 hướng tiếp cận khác nhau:

  isSecureUrlV1(url) Sử dụng indexOf()

  isSecureUrlV2(url) Sử dụng startsWith()
 */

// startWith()

function isSecureUrlV2(url) {
  if (url.startsWith("https") || url.startsWith("wss")) return true;
  return false;
}
