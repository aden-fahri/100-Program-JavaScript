const angka = document.getElementById("fr-angka");
const btnHitung = document.getElementById("btn-hitung");
const hasil = document.getElementById("txt-hasil");

function cekPrima(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= num ** 0.5; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

btnHitung.addEventListener("click", function () {
  hasil.textContent = cekPrima(angka.value) ? "Bilangan Prima" : "Bukan Prima";
});
