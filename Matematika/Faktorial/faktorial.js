const angka = document.getElementById("fr-angka");
const btnHitung = document.getElementById("btn-hitung");
const hasil = document.getElementById("txt-hasil");

function hitungFaktorial(angka) {
  let faktorial = 1;
  for (let i = 1; i <= angka; i++) {
    faktorial *= i;
  }
  return faktorial;
}

btnHitung.addEventListener("click", function () {
  hasil.textContent = hitungFaktorial(angka.value);
});