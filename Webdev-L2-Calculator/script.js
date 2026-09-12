var display = document.getElementById("a");
var buttons = document.querySelectorAll("button");

var firstNumber = "";
var secondNumber = "";
var operator = "";
var result = "";
var waitingForSecondNumber = false;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var value = button.getAttribute("data-value");

    if (value === "C") {
      clearCalculator();
    } else if (value === "backspace") {
      backspace();
    } else if (value === "=") {
      calculate();
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      setOperator(value);
    } else {
      enterNumber(value);
    }
  });
});

function enterNumber(value) {
  // If Error is showing
  if (display.value === "Error") {
    clearCalculator();
  }

  // Start a new calculation after result
  if (result !== "" && operator === "") {
    display.value = "";
    result = "";
  }

  // If we are entering the second number
  if (waitingForSecondNumber) {
    // Keep first number + operator
    display.value = firstNumber + " " + operator + " ";

    waitingForSecondNumber = false;
  }

  // Prevent multiple decimal points in second number
  var currentNumber = display.value.split(" ").pop();

  if (value === "." && currentNumber.includes(".")) {
    return;
  }

  // Add number to display
  display.value += value;
}

function setOperator(value) {
  // Don't allow operator without a number
  if (display.value === "" && result === "") {
    return;
  }

  if (display.value === "Error") {
    return;
  }

  if (waitingForSecondNumber) {
    operator = value;

    display.value = firstNumber + " " + operator + " ";

    return;
  }

  if (operator !== "" && !waitingForSecondNumber) {
    calculate();
  }

  firstNumber = display.value;
  operator = value;

  // Show first number + operator
  display.value = firstNumber + " " + operator + " ";

  waitingForSecondNumber = true;
}

function calculate() {
  if (firstNumber === "" || operator === "" || waitingForSecondNumber) {
    return;
  }

  // Get second number from display
  var parts = display.value.split(" ");
  secondNumber = parts[parts.length - 1];

  var num1 = parseFloat(firstNumber);
  var num2 = parseFloat(secondNumber);

  var answer;

  switch (operator) {
    case "+":
      answer = num1 + num2;
      break;

    case "-":
      answer = num1 - num2;
      break;

    case "*":
      answer = num1 * num2;
      break;

    case "/":
      if (num2 === 0) {
        display.value = "Error";

        firstNumber = "";
        secondNumber = "";
        operator = "";
        result = "";
        waitingForSecondNumber = false;

        return;
      }

      answer = num1 / num2;
      break;
  }

  // Avoid long decimal values
  answer = Number(answer.toFixed(10));

  result = answer;

  display.value = answer;

  firstNumber = answer.toString();
  secondNumber = "";
  operator = "";

  waitingForSecondNumber = false;
}

function clearCalculator() {
  display.value = "";

  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = "";

  waitingForSecondNumber = false;
}

function backspace() {
  if (display.value === "Error") {
    return;
  }

  display.value = display.value.slice(0, -1);
}
