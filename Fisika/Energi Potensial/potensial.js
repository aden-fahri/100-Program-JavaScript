const massa = document.getElementById("fr-massa");
const tinggi = document.getElementById("fr-tinggi");
const btnHitung = document.getElementById("btn-hitung");
const hasil = document.getElementById("txt-hasil");

const g = 10

function hitungEnergiPotensial(massa, g, tinggi) {
  return massa * g * tinggi
}

btnHitung.addEventListener("click", function () {
  hasil.textContent = hitungEnergiPotensial(massa.value, g, tinggi.value)
});
