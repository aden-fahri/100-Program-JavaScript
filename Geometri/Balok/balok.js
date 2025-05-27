const panjang = document.getElementById("fr-panjang");
const lebar = document.getElementById("fr-lebar");
const tinggi = document.getElementById("fr-tinggi");
const btnHitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const volume = document.getElementById("txt-volume");
const keliling = document.getElementById("txt-keliling");

function hitungLuas(panjang, lebar, tinggi) {
  return 2 * (panjang * lebar) + panjang * tinggi + lebar * tinggi;
}
function hitungVolume(panjang, lebar, tinggi) {
  return panjang * lebar * tinggi;
}
function hitungKeliling(panjang, lebar, tinggi) {
  return 4 * (panjang + lebar + tinggi);
}

btnHitung.addEventListener("click", function () {
  luas.textContent = hitungLuas(panjang.value, lebar.value, tinggi.value);
  volume.textContent = hitungVolume(panjang.value, lebar.value, tinggi.value);
  keliling.textContent = hitungKeliling(
    panjang.value,
    lebar.value,
    tinggi.value
  );
});
