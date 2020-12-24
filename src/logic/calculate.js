import operate from './operate';

const calculate = (dataObj, buttonName) => {
  let { total, next, operation } = dataObj;

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      if (next === null) {
        total *= -1;
      } else {
        next *= -1;
      }
      break;
    case '%':
      if (next === null) {
        total /= 100;
      } else {
        next /= 100;
      }
      break;
    case '+':
    case '-':
    case '÷':
    case 'X':
      if (total === null) {
        total = 0;
      };
      if (total !== null && next !== null & operation !== null) {
        total = operate(total, next, operation);
        next = null;
      };
      operation = buttonName;
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (operation === null) {
        if (total === null) {
          total = buttonName;
        } else if (typeof total === 'number') {
          total = buttonName;
        } else {
          total += buttonName;
        }
      } else if (next === null) {
        next = buttonName;
      } else {
        next += buttonName;
      }
      break;
    case '.':
      if (operation === null) {
        if (total === null) {
          total = 0 + buttonName;
        } else if (!/[.]/.test(total)) {
          total += buttonName;
        }
      } else if (next === null) {
        next = 0 + buttonName;
      } else if (!/[.]/.test(next)) {
        next += buttonName;
      }
      break;
    case '=':
      if (operation !== null) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;
    default:
      total = 'Error';
      next = null;
      operation = null;
      break;
  }

  return { total, next, operation };
}

export default calculate;
