const lowercaseCharts = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberCharts = "0123456789";
const symbolsCharts = "!@#$%^&*_+";
const spaceChar = " ";

function getRandomChar(chars) {
  const index = Math.floor(Math.random() * chars.length);
  return chars[index];
}

function generatePassword() {
  const passwordInput = document.getElementById('password');
  const lowercaseCheckbox = document.getElementById('lowercase');
  const uppercaseCheckbox = document.getElementById('uppercase');
  const numberCheckbox = document.getElementById('numbers');
  const symbolsCheckbox = document.getElementById('symbols');
  const excludeDuplicateCheckbox = document.getElementById('exc-duplicate');
  const spacesCheckbox = document.getElementById('spaces');

  let characters = '';
  if (lowercaseCheckbox.checked) characters += lowercaseCharts;
  if (uppercaseCheckbox.checked) characters += uppercaseCharts;
  if (numberCheckbox.checked) characters += numberCharts;
  if (symbolsCheckbox.checked) characters += symbolsCharts;
  if (spacesCheckbox.checked) characters += spaceChar;

  if (characters === '') {
    passwordInput.value = '';
    return;
  }

  if (excludeDuplicateCheckbox.checked && characters.length < 12) {
    passwordInput.value = '';
    return;
  }

  let password = '';
  const length = 12;

  while (password.length < length) {
    let char = getRandomChar(characters);
    if (excludeDuplicateCheckbox.checked && password.includes(char)) continue;
    password += char; 
  }

  passwordInput.value = password;
}

function copyPassword() {
  const passwordInput = document.getElementById('password');
  const copyButton = document.getElementById('copy');

  passwordInput.select();
  document.execCommand('copy');

  copyButton.textContent = 'Copied';
  setTimeout(() => {
    copyButton.textContent = 'Copy';
  }, 2000);
}