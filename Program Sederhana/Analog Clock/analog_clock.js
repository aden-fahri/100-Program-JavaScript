const stalkSeconds = document.querySelector(".stalk-seconds");
const stalkMinutes = document.querySelector(".stalk-minutes");
const stalkHours = document.querySelector(".stalk-hours");

setInterval(function () {
  const date = new Date();

  const seconds = date.getSeconds() * 6; 
  const minutes = date.getMinutes() * 6 + date.getSeconds() * 0.1; 
  const hours = (date.getHours() % 12) * 30 + date.getMinutes() * 0.5; 

  stalkSeconds.style.transform = `rotate(${seconds}deg)`;
  stalkMinutes.style.transform = `rotate(${minutes}deg)`;
  stalkHours.style.transform = `rotate(${hours}deg)`;
}, 1000);
