const massaJenis = document.getElementById("fr-massa-jenis");
const volume = document.getElementById("fr-volume");
const btnHitung = document.getElementById("btn-hitung");
const dayaApung = document.getElementById("txt-daya-apung");

const g = 10;

function hitungDayaApung(massaJenis, volume) {
  return massaJenis * g * volume;
}

btnHitung.addEventListener("click", function () {
  dayaApung.textContent = hitungDayaApung(massaJenis.value, volume.value);
});