import Big from "big.js";

const operate = (numOne, numTwo, operation) => {
  switch (operation) {
    case "+":
      return Big(numOne).plus(numTwo).toString();
    case "-":
      return Big(numOne).minus(numTwo).toString();
    case "X":
      return Big(numOne).times(numTwo).toString();
    case "÷":
      return Big(numOne).div(numTwo).toString();
    default:
      return 'Not an operable symbol';
  }
};

export default operate;