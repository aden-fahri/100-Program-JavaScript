const xInput = document.getElementById("fr-x");
const yInput = document.getElementById("fr-y");
const zInput = document.getElementById("fr-z");
const btnTukar = document.getElementById("btn-tukar");
const hasil = document.getElementById("txt-hasil");

btnTukar.addEventListener("click", function () {
  let x = parseInt(xInput.value);
  let y = parseInt(yInput.value);
  let z = parseInt(zInput.value);

  if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
    let a = x;
    x = y;
    y = z;
    z = a;

    hasil.textContent = `Setelah dipertukarkan: (${x}, ${y}, ${z})`;
  } else {
    hasil.textContent = "Masukkan angka yang valid!";
  }
});
