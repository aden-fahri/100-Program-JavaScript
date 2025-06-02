const angka = document.getElementById("fr-angka");
const btnHitung = document.getElementById("btn-hitung");
const hasil = document.getElementById("txt-hasil");

function hitungJumlahDigit(angka) {
  let jumlahDigit = 0;
  let temp = Math.abs(angka);
  if (temp === 0) {
    return 1;
  }
  while (temp >= 1) {
    temp /= 10;
    jumlahDigit++;
  }
  return jumlahDigit;
}

btnHitung.addEventListener("click", function () {
  hasil.textContent = hitungJumlahDigit(angka.value);
});
