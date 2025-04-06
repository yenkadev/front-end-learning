/**
 * Rút trích ngôn ngữ từ URL
  Viết hàm getLanguageCodeFromURL(url) nhận vào url và trả về chuỗi language code rút trích từ url.

  Trường hợp không có language code thì trả về ngôn ngữ mặc định là en

  Giả sử mình chỉ hỗ trợ một số ngôn ngữ như: ['en', 'vi', 'cn'] (lấy từ hằng số SUPPORTED_LANGUAGE_LIST), nếu phát hiện một ngôn ngữ truyền vào chưa hỗ trợ thì trả về en

  Giả sử domain luôn là domain .com

  Chú ý url có thể có trailing slash (tức có dấu / ở cuối url)

  Ví dụ:

  getLanguageCodeFromURL('https://abc.com') --> 'en'

  getLanguageCodeFromURL('https://jsfrontend.com/en') --> 'en'

  getLanguageCodeFromURL('https://jsfrontend.com/cn') --> 'cn'

  getLanguageCodeFromURL('https://jsfrontend.com/vi/') --> 'vi'

  getLanguageCodeFromURL('https://jsfrontend.com/abc') --> 'en' vì abc là ngôn ngữ không được hỗ trợ
 */