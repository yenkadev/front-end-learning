document.getElementById("btn-submit").addEventListener("click", () => {
  let money = document.getElementById("money").value;
  let tip = document.getElementById("tip").value;
  let people = document.getElementById("people").value;

  let result = (money * tip) / 100 / people;

  if (result > 0) {
    document.getElementById("tip-amount").innerHTML = `
    <h2>TIP AMOUNT</h2>
    <p>
        <sup>$</sup>
        <span>${result}</span>
    </p>
    <p>mỗi người</p>
    `;
  } else {
    document.getElementById("tip-amount").innerHTML =
      "Dữ liệu không đúng, vui lòng nhập lại";
  }
});
