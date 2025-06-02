const bulan = document.getElementById("fr-bulan");
const tahun = document.getElementById("fr-tahun");
const btnHitung = document.getElementById("btn-hitung");
const hasil = document.getElementById("txt-hasil");

const hariPerBulan = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function cekKabisat(tahun) {
    return (tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0);
}

btnHitung.addEventListener("click", function () {
    const bulanInput = parseInt(bulan.value);
    const tahunInput = parseInt(tahun.value);

    if (!isNaN(bulanInput) && bulanInput >= 1 && bulanInput <= 12 && !isNaN(tahunInput) && tahunInput > 0) {
        let jumlahHari = hariPerBulan[bulanInput - 1];

        if (bulanInput === 2 && cekKabisat(tahunInput)) {
            jumlahHari = 29;
        }

        hasil.textContent = `Jumlah hari dalam bulan ${bulanInput} tahun ${tahunInput} adalah ${jumlahHari}`;
    } else {
        hasil.textContent = "Masukkan angka yang valid!";
    }
});