let typeOfVehicle = "";

function tinhTien() {
  let vehicles = document.getElementsByName("uber");
  let valueOfVehicle = 0;
  for (i = 0; i < vehicles.length; i++) {
    if (vehicles[i].checked == true) {
      typeOfVehicle = vehicles[i].value;
      if (typeOfVehicle == "Uber X") {
        valueOfVehicle = 10;
      } else if (typeOfVehicle == "Uber SUV") {
        valueOfVehicle = 20;
      } else {
        valueOfVehicle = 30;
      }
    }
  }

  let soKM = document.getElementById("soKM").value;
  let tongTien = valueOfVehicle + soKM * 5000;

  return tongTien;
}

document.getElementById("btn-tinhtien").addEventListener("click", () => {
  let tien = tinhTien();
  document.getElementById(
    "result"
  ).innerHTML = ` <h2 class="title">Tổng tiền của bạn là</h2>
        <p><span>${tien}</span> VND</p>`;
});

document.getElementById("btn-inhoadon").addEventListener("click", () => {
  let tien = tinhTien();
  let thoiGian = document.getElementById("thoigian").value;
  document.getElementById(
    "result"
  ).innerHTML = `<h2 class="title">Hóa đơn của bạn là</h2>
        <p>Loại xe: <span>${typeOfVehicle}</span></p>
        <p>Tổng tiền: <span>${tien}</span> VND</p>
        <p>Thời gian chờ: <span>${thoiGian}</span> phút</p>`;
});
