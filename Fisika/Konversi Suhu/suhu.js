const celsius = document.getElementById("fr-celsius");
const btnHitung = document.getElementById("btn-hitung");
const fahrenheit = document.getElementById("txt-fahrenheit");
const kelvin = document.getElementById("txt-kelvin");
const reamur = document.getElementById("txt-reamur");

function hitungFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function hitungKelvin(celsius) {
  return celsius + 273.15;
}

function hitungReamur(celsius) {
  return celsius * 4 / 5;
}

btnHitung.addEventListener("click", function () {
  fahrenheit.textContent = hitungFahrenheit(celsius.value);
  kelvin.textContent = hitungKelvin(celsius.value);
  reamur.textContent = hitungReamur(celsius.value);
});