import Big from "big.js";

export default operate = (numberOne, numberTwo, operation) => {
  // dataObj has three properties: total, next, operation

  let x = numberOne;
  let y = numberTwo;

  // Operations:  +, -, x, ÷, %

  switch (operation) {
    case "+":
      return Big(x).plus(y);
      break;
    case "-":
      return Big(x).minus(y);
      break;
    case "x":
      return Big(x).times(y);
      break;
    case "÷":
      return Big(x).div(y);
      break;
    case "%":
      return Big(x).plus(y);
      break;
  }


};
