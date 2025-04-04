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
  // 5400s = 1.5h
  if (seconds < 0 || seconds > 86400) return "";
  const hours = Math.trunc(seconds / 3600); // 1h
  const minutes = Math.trunc((seconds % 3600) / 60);  // 5 / 60 = 0.025 => 0 minutes
  const secs = seconds % 60; // 0

  let hh = hours < 10 ? "0" + hours : String(hours); // ``, const
  let mm = minutes < 10 ? "0" + minutes : String(minutes);
  let ss = secs < 10 ? "0" + secs : String(secs);
  return hh + ":" + mm + ":" + ss;
}
