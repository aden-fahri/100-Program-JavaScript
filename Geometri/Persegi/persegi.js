const sisi = document.getElementById("fr-sisi"); 
const btnHitung = document.getElementById("btn-hitung"); 
const luas = document.querySelector("#txt-luas"); 
const keliling = document.querySelector("#txt-keliling");
function hitungLuas(sisi) {
  return sisi * sisi;
}

function hitungKeliling(sisi) {
  return 4 * sisi; 
}

btnHitung.addEventListener("click", function () {
  luas.textContent = hitungLuas(sisi.value);
  keliling.textContent = hitungKeliling(sisi.value);
});
