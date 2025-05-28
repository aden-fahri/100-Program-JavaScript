const siswa = document.getElementById("fr-siswa");
const nilai = document.getElementById("fr-nilai");
const btnHitung = document.getElementById("btn-hitung");
const grade = document.getElementById("txt-grade");
const nama = document.getElementById("txt-nama");

function nilaiSiswa(nilai) {
  nilai = Number(nilai);
  if (nilai >= 90 && nilai <= 100) {
    return "Nilai A";
  } else if (nilai >= 80 && nilai <= 89) {
    return "Nilai B";
  } else if (nilai >= 70 && nilai <= 79) {
    return "Nilai C";
  } else if (nilai >= 60 && nilai <= 69) {
    return "Nilai E";
  } else {
    nilai <= 60;
    return "Nilai F";
  }
}

btnHitung.addEventListener("click", function () {
  grade.textContent = nilaiSiswa(nilai.value);
  nama.textContent = siswa.value;
});
