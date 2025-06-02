const canvas = document.getElementById("canvas");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const size = document.getElementById("size");
const color = document.getElementById("color");
const clear = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let sizeL = 10;
let isPressed = false;
color.value = "black";
let colorL = color.value;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = colorL;
    ctx.lineWidth = sizeL;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
    x = x2;
    y = y2;
  }
});

color.addEventListener("change", (e) => {
  colorL = e.target.value;
});

increase.addEventListener("click", () => {
  sizeL += 5;
  if (sizeL > 50) sizeL = 50;
  size.textContent = sizeL;
});

decrease.addEventListener("click", () => {
  sizeL -= 5;
  if (sizeL < 5) sizeL = 5;
  size.textContent = sizeL;
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

size.textContent = sizeL;
