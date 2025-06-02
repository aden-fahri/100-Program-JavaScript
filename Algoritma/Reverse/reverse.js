const btnReverse = document.getElementById("btn-reverse");
const inputString = document.getElementById("input-string");
const result = document.getElementById("result");

function reverse(str) {
  return str.split('').reverse().join('');
}

btnReverse.addEventListener("click", function () {
  const input = inputString.value.trim();
  const reversed = reverse(input);
  result.textContent = `Hasil: ${reversed}`;
});