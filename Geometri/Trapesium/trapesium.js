const sisiAtas = document.getElementById("fr-sisi-atas");
const sisiBawah = document.getElementById("fr-sisi-bawah");
const tinggi = document.getElementById("fr-tinggi");
const sisiKiri = document.getElementById("fr-sisi-kiri");
const sisiKanan = document.getElementById("fr-sisi-kanan");
const btnHitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const keliling = document.getElementById("txt-keliling");

function hitungLuas(sisiAtas, sisiBawah, tinggi) {
  return 0.5 * (sisiAtas + sisiBawah) * tinggi;
}

function hitungKeliling(sisiAtas, sisiBawah, sisiKiri, sisiKanan) {
  return sisiAtas + sisiBawah + sisiKiri + sisiKanan;
}

btnHitung.addEventListener("click", function () {
  luas.textContent = hitungLuas(sisiAtas.value, sisiBawah.value, tinggi.value);
  keliling.textContent = hitungKeliling(sisiAtas.value, sisiBawah.value, sisiKiri.value, sisiKanan.value);
});