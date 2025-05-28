const nama = document.getElementById("fr-nama");
const usia = document.getElementById("fr-usia");
const btnUsia = document.getElementById("btn-usia");
const kategori = document.getElementById("txt-kategori");
const namaPlayer = document.getElementById("txt-nama");

function tentukanKategoriUsia(usia) {
  usia = Number(usia);
  if (usia > 60 && usia <= 74) {
    return "Lansia";
  } else if (usia > 45 && usia <= 59) {
    return "Usia pertengahan";
  } else if (usia > 25 && usia <= 44) {
    return "Dewasa";
  } else if (usia > 15 && usia <= 24) {
    return "Remaja";
  } else if (usia > 0 && usia <= 14) {
    return "Anak-anak";
  } else {
    return "Usia lanjut";
  }
}

btnUsia.addEventListener("click", function () {
  kategori.textContent = tentukanKategoriUsia(usia.value);
  namaPlayer.textContent = nama.value;
});
