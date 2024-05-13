const phoneMask = document.getElementById("phone-mask");
const progressLine = document.querySelector(".progress-line");

IMask(phoneMask, {
  mask: "+{38} (000) 000-00-00",
});

phoneMask.oninput = function () {
  const w = this.offsetWidth;

  const colorValue = 255 - (255 / 19) * this.value.length;
  progressLine.style.width = (w / 19) * this.value.length + "px";
  progressLine.style.backgroundColor = `rgb(${colorValue}, 137, 0)`;
};
