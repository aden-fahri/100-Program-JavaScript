const alas = document.getElementById("fr-alas");
const tinggi = document.getElementById("fr-tinggi");
const btnHitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");

function hitungLuas(alas, tinggi) {
  return (1 / 2) * alas * tinggi;
}

btnHitung.addEventListener("click", function () {
  luas.textContent = hitungLuas(alas.value, tinggi.value);
});
