const calculateScreen = document.querySelector(".calculate");
const resultScreen = document.querySelector(".result");

let calculateValue = "";
const operators = ["%", "/", "*", "-", "+"];

function tapNum(numValue) {
  if (calculateValue == "" && numValue == ".") {
    return;
  }

  if (calculateValue.at(-1) == "." && numValue == ".") {
    return;
  }

  addCalculateScreen(numValue);
}

function tapOperator(operatorValue) {
  if (calculateValue == "") return;

  if (operators.some((operator) => calculateValue.at(-1) == operator)) {
    return;
  }

  if (resultScreen.textContent != "" && resultScreen.textContent != "Error") {
    resultScreen.textContent = "";
  }

  addCalculateScreen(operatorValue);
}

function tapResult() {
  try {
    resultScreen.textContent = eval(calculateValue);
  } catch (e) {
    resultScreen.textContent = "Error";
  }
}

function tapClear() {
  calculateValue = "";
  calculateScreen.textContent = calculateValue;
  resultScreen.textContent = "";
}

function tapDel() {
  calculateValue = calculateValue.slice(0, -1);
  resultScreen.textContent = "";
  calculateScreen.textContent = calculateValue;
}

function addCalculateScreen(value) {
  calculateValue += value;
  calculateScreen.textContent = calculateValue;
}
