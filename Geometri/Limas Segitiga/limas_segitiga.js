const luasAlas = document.getElementById("fr-luas-alas");
const tinggi = document.getElementById("fr-tinggi");
const luasSisiTegak1 = document.getElementById("fr-luas-sisi-tegak1");
const luasSisiTegak2 = document.getElementById("fr-luas-sisi-tegak2");
const luasSisiTegak3 = document.getElementById("fr-luas-sisi-tegak3");
const btnHitung = document.getElementById("btn-hitung");
const volume = document.getElementById("txt-volume");
const luasPermukaan = document.getElementById("txt-luas-permukaan");

function hitungVolume(luasAlas, tinggi) {
  return (1/3) * luasAlas * tinggi;
}

function hitungLuasPermukaan(luasAlas, luasSisiTegak1, luasSisiTegak2, luasSisiTegak3) {
  return Number(luasAlas) + Number(luasSisiTegak1) + Number(luasSisiTegak2) + Number(luasSisiTegak3);
}

btnHitung.addEventListener("click", function () {
  volume.textContent = hitungVolume(luasAlas.value, tinggi.value);
  luasPermukaan.textContent = hitungLuasPermukaan(
    luasAlas.value,
    luasSisiTegak1.value,
    luasSisiTegak2.value,
    luasSisiTegak3.value
  );
});