const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const jumlah = angka.reduce((total, num) => total + num, 0);

console.log(jumlah);