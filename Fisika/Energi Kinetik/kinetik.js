const massa = document.getElementById("fr-massa");
const kecepatan = document.getElementById("fr-kecepatan");
const btnHitung = document.getElementById("btn-hitung");
const hasil = document.getElementById("txt-hasil");

function hitungEnergiKinetik(massa, kecepatan) {
  return 0.5 * massa * kecepatan**2;
}

btnHitung.addEventListener("click", function () {
  hasil.textContent = hitungEnergiKinetik(massa.value, kecepatan.value)
});