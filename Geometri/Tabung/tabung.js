const phi = 3.14;
const jari = document.getElementById("fr-jari");
const tinggi = document.getElementById("fr-tinggi");
const btnHitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const volume = document.getElementById("txt-volume");

function hitungLuas(jari, tinggi) {
  return 2 * phi * jari * (jari + tinggi);
}
function hitungVolume(jari, tinggi) {
  return phi * jari * jari * tinggi;
}

btnHitung.addEventListener("click", function () {
  luas.textContent = hitungLuas(jari.value, tinggi.value);
  volume.textContent = hitungVolume(jari.value, tinggi.value);
});
