var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random-button");


function toHex(n) {
  const hex = n.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

function btnOnClick() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  changeBackgroundGradient()
}

function changeBackgroundGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";"
}

// randomButton.addEventListener("click", btnOnClick);

// color1.addEventListener("input", changeBackgroundGradient);
//
// color2.addEventListener("input", changeBackgroundGradient);
