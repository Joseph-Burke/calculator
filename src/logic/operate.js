import Big from "big.js";

const operate = (numberOne, numberTwo, operation) => {
  let [x, y] = [numberOne, numberTwo];

  switch (operation) {
    case "+":
      return Big(x).plus(y).toString();
    case "-":
      return Big(x).minus(y).toString();
    case "X":
      return Big(x).times(y).toString();
    case "÷":
      return Big(x).div(y).toString();
    default:
      return 'Not an operable symbol';
  }
};

export default operate;