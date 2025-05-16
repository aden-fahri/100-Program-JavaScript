const jari = document.getElementById("fr-jari");
const tinggi = document.getElementById("fr-tinggi");
const jarak = document.getElementById("fr-jarak");
const btnHitung = document.getElementById("btn-hitung");
const volume = document.getElementById("txt-volume");
const permukaan = document.getElementById("txt-permukaan");
const selimut = document.getElementById("txt-selimut");

const PHI = 3.14;

function hitungVolume(jari, tinggi) {
  return (1 / 3) * PHI * jari * jari * tinggi;
}
function hitungPermukaan(jari, jarak) {
  return PHI * jari * jarak + PHI * jari * jari;
}
function hitungSelimut(jari, jarak) {
  return PHI * jari * jarak;
}

btnHitung.addEventListener("click", function () {
  volume.textContent = hitungVolume(jari.value, tinggi.value, jarak.value);
  permukaan.textContent = hitungPermukaan(jari.value, tinggi.value, jarak.value);
  selimut.textContent = hitungSelimut(jari.value, tinggi.value, jarak.value);
});
