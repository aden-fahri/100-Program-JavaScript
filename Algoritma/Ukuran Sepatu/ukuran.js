const sepatu = document.getElementById("fr-sepatu");
const btnHitung = document.getElementById("btn-hitung");
const ukuran = document.getElementById("txt-ukuran");

function ukuranSepatu(sepatu) {
  sepatu = Number(sepatu);
  if (sepatu > 40 && sepatu <= 45) {
    return "Ukuran sepatu besar";
  } else if (sepatu > 36 && sepatu <= 39) {
    return "Ukuran sepatu sedang";
  } else if (sepatu >= 30 && sepatu <= 35) {
    return "Ukuran sepatu kecil";
  } else {
    return "Ukuran salah";
  }
}

btnHitung.addEventListener("click", function () {
  ukuran.textContent = ukuranSepatu(sepatu.value);
});
