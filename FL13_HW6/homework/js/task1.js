/** @format */

let inputNumber;
let inputPercentage;
let hundred = 100;
let two = 2;
inputNumber = Number(prompt("Inputs check number"));
inputPercentage = Number(prompt("Inputs tip percentage"));

if (
  isNaN(inputPercentage) === false &&
  isNaN(inputNumber) === false &&
  inputPercentage >= 0 &&
  inputNumber >= 0 &&
  inputPercentage <= hundred
) {
  let tipAmount = inputNumber * inputPercentage / hundred;
  let totalSumma = inputNumber + tipAmount;

  let str =
    "Check number: " +
    inputNumber.toFixed(two) +
    "\nTip: " +
    inputPercentage.toFixed(two) +
    "% \nTip amount: " +
    tipAmount.toFixed(two) +
    "\nTotal sum to pay: " +
    totalSumma.toFixed(two);
  alert(str);
} else {
  alert("Invalid input data");
}
