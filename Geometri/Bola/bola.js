const jari = document.getElementById('fr-jari')
const btnHitung = document.getElementById('btn-hitung')
const volume = document.getElementById('txt-volume')
const luasPermukaan = document.getElementById('txt-luas-permukaan')
const PHI = 3.14

function hitungVolume(jari) {
  return (4/3) * PHI * jari ** 3
}

function hitungLuasPermukaan(jari) {
  return 4 * PHI * jari ** 2
}

btnHitung.addEventListener('click', function(){
  volume.textContent = hitungVolume(jari.value) 
  luasPermukaan.textContent = hitungLuasPermukaan(jari.value) 
})