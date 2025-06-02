const inputBulan = document.getElementById("fr-bulan");
const btnHitung = document.getElementById("btn-hitung");
const bulan = document.getElementById("txt-bulan");

function getNamaBulan(bulan) {
  const bulanNum = Number(bulan);
  
  if (bulanNum === 1) return "Januari";
  if (bulanNum === 2) return "Februari";
  if (bulanNum === 3) return "Maret";
  if (bulanNum === 4) return "April";
  if (bulanNum === 5) return "Mei";
  if (bulanNum === 6) return "Juni"
  if (bulanNum === 7) return "Juli"
  if (bulanNum === 8) return "Agustus"
  if (bulanNum === 9) return "September"
  if (bulanNum === 10) return "Oktober"
  if (bulanNum === 11) return "November"
  if (bulanNum === 12) return "Desember"
} 

btnHitung.addEventListener('click', function () {
  bulan.textContent = getNamaBulan(inputBulan.value)
})