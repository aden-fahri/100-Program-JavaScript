const angkaInput = document.getElementById("fr-angka");
const btnHitung = document.getElementById("btn-hitung");
const hasil = document.getElementById("txt-hasil");

const angkaJepangKanji = [
    "一 (ICHI)", "二 (NI)", "三 (SAN)", "四 (YON/SHI)", "五 (GO)", 
    "六 (ROKU)", "七 (NANA/SHICHI)", "八 (HACHI)", "九 (KYUU)", "十 (JUU)"
];

btnHitung.addEventListener("click", function () {
    const angka = parseInt(angkaInput.value);

    if (angka >= 1 && angka <= 10) {
        hasil.textContent = `${angka} dalam angka Jepang (kanji) adalah: ${angkaJepangKanji[angka - 1]}`;
    } else {
        hasil.textContent = "Angka salah. Tolong masukkan angka 1-10!";
    }
});