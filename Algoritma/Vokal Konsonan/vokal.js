document.getElementById("btn-cek").addEventListener("click", function() {
  let huruf = document.getElementById("fr-huruf").value.toUpperCase();
  const vokal = ['A', 'I', 'U', 'E', 'O'];
  let hasil = document.getElementById("txt-hasil");

  if (huruf.length !== 1 || !/^[A-Za-z]$/.test(huruf)) {
    return;
  }

  if (vokal.includes(huruf)) {
    hasil.textContent = `${huruf} adalah huruf Vokal`;
  } else {
    hasil.textContent = `${huruf} adalah huruf Konsonan`;
  }
});