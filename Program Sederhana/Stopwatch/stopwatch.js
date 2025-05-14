const jamText = document.querySelector("#jam");
const menitText = document.querySelector("#menit");
const detikText = document.querySelector("#detik");
const btnStop = document.querySelector("#txt-stop");
const btnStart = document.querySelector("#txt-start");
const btnReset = document.querySelector("#txt-reset");

let jam = 0;
let menit = 0;
let detik = 0;
let timer = null;

const increment = () => {
  detik++;
  if (detik === 60) {
    menit++;
    detik = 0;
  }
  if (menit === 60) {
    jam++;
    menit = 0;
  }
  detikText.textContent = detik < 10 ? `0${detik}` : detik;
  menitText.textContent = menit < 10 ? `0${menit}` : menit;
  jamText.textContent = jam < 10 ? `0${jam}` : jam;
};

btnStart.addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(increment, 1000);
  }
});

btnStop.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

btnReset.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  detik = 0;
  menit = 0;
  jam = 0;
  detikText.textContent = "00";
  menitText.textContent = "00";
  jamText.textContent = "00";
});
