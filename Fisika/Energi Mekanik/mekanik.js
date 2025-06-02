const energiKinetik = document.getElementById("fr-energi-kinetik");
const energiPotensial = document.getElementById("fr-energi-potensial");
const btnHitung = document.getElementById("btn-hitung");
const hasil = document.getElementById("txt-hasil");

function hitungEnergiMekanik(energiKinetik, energiPotensial) {
  const ek = Number(energiKinetik);
  const ep = Number(energiPotensial);
  return ek + ep;
}

btnHitung.addEventListener("click", function () {
  const total = hitungEnergiMekanik(energiKinetik.value, energiPotensial.value);
  hasil.textContent = total;
});
