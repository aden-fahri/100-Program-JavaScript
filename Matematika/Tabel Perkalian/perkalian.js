const btnHitung = document.getElementById("btn-hitung");
const tabel = document.getElementById("tabel-perkalian");

btnHitung.addEventListener("click", function () {
  const angka = document.getElementById("fr-angka").value;
  tabel.innerHTML = "";
  for (let i = 1; i <= angka; i++) {
    let row = document.createElement("tr");
    for (let j = 1; j <= angka; j++) {
      const cell = document.createElement("td");
      cell.textContent = i * j;
      row.appendChild(cell);
    }
    tabel.appendChild(row);
  }
});
