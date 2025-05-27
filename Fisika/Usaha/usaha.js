const gaya = document.getElementById("fr-gaya");
const perpindahan = document.getElementById("fr-perpindahan");
const btnHitung = document.getElementById("btn-hitung");
const usaha = document.getElementById("txt-usaha");

function hitungUsaha(gaya, perpindahan) {
  return gaya * perpindahan;
}

btnHitung.addEventListener("click", function () {
  usaha.textContent = hitungUsaha(gaya.value, perpindahan.value);
});