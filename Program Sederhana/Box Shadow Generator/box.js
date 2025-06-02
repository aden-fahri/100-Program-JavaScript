let sliders = document.querySelectorAll('input[type="range"]');
let colors = document.querySelectorAll('input[type="color"]');
let output = document.getElementById("css-code");
let btnCopy = document.getElementById("copy");

sliders.forEach((sliders) => {
  sliders.addEventListener("input", createBox);
});

colors.forEach((color) => {
  color.addEventListener("change", createBox);
});

btnCopy.addEventListener("click", () => {
  output.select();
  document.execCommand("copy");
  alert("Code Copied");
});

function createBox() {
  let x = sliders[0].value;
  let y = sliders[1].value;
  let blurRadius = sliders[2].value;
  let spreadRadius = sliders[3].value;

  let shadow = `${x}px ${y}px ${blurRadius}px ${spreadRadius}px rgba(0, 0, 0, 0.5)`;
  box.style.boxShadow = shadow;
  output.value = `box-shadow: ${shadow};`;
}

createBox();
