const inputTahun = document.getElementById('fr-tahun');
const btnHitung = document.getElementById('btn-hitung');
const txtHasil = document.getElementById('txt-hasil');

function tahunKabisat(tahun) {
  if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
    return `${tahun} adalah tahun kabisat`;
  } else {
    return `${tahun} bukan tahun kabisat`;
  }
}

btnHitung.addEventListener('click', () => {
  const tahun = parseInt(inputTahun.value);
  if (isNaN(tahun) || inputTahun.value === '') {
    return;
  }
  txtHasil.textContent = tahunKabisat(tahun);
});