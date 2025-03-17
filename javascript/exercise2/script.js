let light = document.getElementById("light");
document.getElementById("btn-on").addEventListener("click", () => {
  light.src = "./images/light-on.png";
  light.style.width = "350px";
});

document.getElementById("btn-off").addEventListener("click", () => {
  light.src = "./images/light-off.png";
  light.style.width = "200px";
});
