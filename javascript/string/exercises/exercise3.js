/**
 * Convert số giây sang chuỗi hh:mm:ss
  Viết hàm formatTime(seconds) nhận vào là số giây seconds với (0 <= seconds <= 86400)

  Trả về là một chuỗi với định dạng hh:mm:ss trong đó:

  hh là số giờ

  mm là số phút

  ss là số giây

  hh, mm, ss luôn luôn hiển thị 2 chữ số kể cả nhỏ hơn 10.

  Ví dụ:

  formatTime(0) --> '00:00:00'

  formatTime(9) --> '00:00:09'

  formatTime(4256) --> '01:10:56'
 */

function formatTime(seconds) {
  if (seconds < 0 || seconds > 86400) return -1;
  const hours = Math.trunc(seconds / 3600);
  const minutes = Math.trunc((seconds % 3600) / 60);
  const secs = seconds % 60;

  const formatNumber = (num) => (num < 10 ? "0" + num : "" + num);

  return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(
    secs
  )}`;
}
console.log(formatTime(0));
console.log(formatTime(9));
