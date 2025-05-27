const usaha = document.getElementById("fr-usaha");
const waktu = document.getElementById("fr-waktu");
const btnHitung = document.getElementById("btn-hitung");
const daya = document.getElementById("txt-daya");


function hitungDaya(usaha, waktu) {
  return usaha / waktu;
}

btnHitung.addEventListener("click", function () {
  daya.textContent = hitungDaya(usaha.value, waktu.value);
});