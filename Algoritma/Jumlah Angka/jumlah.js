const angka = document.getElementById("fr-angka");
const btnHitung = document.getElementById("btn-hitung");
const jumlah = document.getElementById("txt-jumlah");

btnHitung.addEventListener("click", function () {
  const angkaArray = angka.value
    .split(",")
    .map((num) => parseFloat(num.trim()))
    .filter((num) => !isNaN(num));

  jumlah.textContent = angkaArray.length
    ? angkaArray.reduce((total, num) => total + num, 0)
    : "0";
});
