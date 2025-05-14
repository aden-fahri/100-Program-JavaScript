const stalkSeconds = document.querySelector(".stalk-seconds");
const stalkMinutes = document.querySelector(".stalk-minutes");
const stalkHours = document.querySelector(".stalk-hours");

setInterval(function () {
  const date = new Date();

  const seconds = date.getSeconds() * 6; // 360° ÷ 60 detik = 6° per detik
  const minutes = date.getMinutes() * 6 + date.getSeconds() * 0.1; // 6° per menit + 0.1° per detik untuk gerakan mulus
  const hours = (date.getHours() % 12) * 30 + date.getMinutes() * 0.5; // 30° per jam + 0.5° per menit

  stalkSeconds.style.transform = `rotate(${seconds}deg)`;
  stalkMinutes.style.transform = `rotate(${minutes}deg)`;
  stalkHours.style.transform = `rotate(${hours}deg)`;
}, 1000);
