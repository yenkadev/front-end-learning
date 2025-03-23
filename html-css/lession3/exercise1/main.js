const counts = document.querySelectorAll(".count");
const speed = 96;

counts.forEach((counter) => {
  function upDate() {
    const target = Number(counter.getAttribute("data-target"));
    const count = Number(counter.innerText);
    const inc = Math.max(target / speed, 1);

    if (count < target) {
      counter.innerText = Math.ceil(inc + count);
      setTimeout(upDate, 15);
    } else {
      counter.innerText = target;
    }
  }
  upDate();
});
