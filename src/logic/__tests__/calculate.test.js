import calculate from "../calculate";

describe("Calculate", () => {
  describe("Button Name is AC", () => {
    it("returns a data object where total, next and operation are all null", () => {
      let { total, next, operation } = calculate(
        { total: 0, next: 10, operation: "+" },
        "AC"
      );
      expect(total).toBeNull;
      expect(next).toBeNull;
      expect(operation).toBeNull;
    });
  });

  describe("Button Name is +/-", () => {
    describe("dataObj.next was null", () => {
      it("returns a data object where the total value is inverted", () => {
        const previousTotal = 1;
        const { total } = calculate({ total: previousTotal, next: null, operation: null }, "+/-");
        expect(total * -1).toEqual(previousTotal);
        expect(total + previousTotal).toEqual(0);
      });
    });

    describe("dataObj.next was not null", () => {
      it("returns a data object where the next value is inverted", () => {
        const [previousTotal, previousNext] = [1, 1];
        const { next } = calculate(
          { total: previousTotal, next: previousNext, operation: null },
          "+/-"
        );
        expect(next * -1).toEqual(previousNext);
        expect(next + previousNext).toEqual(0);
      });
    });
  });

  describe("Button Name is %", () => {
    describe("dataObj.next was null", () => {
      it("returns a data object where the total value is 1% its original size", () => {
        const previousTotal = 100;
        const { total } = calculate(
          { total: previousTotal, next: null, operation: null },
          "%"
        );
        expect(total * 100).toEqual(previousTotal);
      });
    });

    describe("dataObj.next was not null", () => {
      it("returns a data object where the next value is 1% its original size", () => {
        const previousNext = 100;
        const { next } = calculate(
          { total: 50, next: previousNext, operation: null },
          "%"
        );
        expect(next * 100).toEqual(previousNext);
      });
    });
  });

  describe("Button Name is +, -, ÷, X", () => {
    describe("dataObj.total was null", () => {
      it("returns a data object where the total is zero and the operation is the buttonName", () => {
        const { total, operation } = calculate({total: null, next: null, operation: '+' }, 'X');
        expect(total).toEqual(0);
        expect(operation).toEqual('X');
      });
    });

    describe("dataObj's total, next and operation all had not-null values", () => {
      const [previousTotal, previousNext, previousOperation] = [5, 10, '+'];
      const dataObj = {total: previousTotal, next: previousNext, operation: previousOperation};
      const { total, next, operation } = calculate(dataObj, '-');

      it("performs the calculation from the previous dataObj and saves the result as a string in total of the new dataObj", () => {
        expect(total).toEqual((previousTotal + previousNext).toString());
      });

      it("returns an object whose next value is null", () => {
        expect(next).toBeNull();
      });

       it("returns an object whose operation is the pressed button", () => {
         expect(operation).toBe('-');
       });
    });
  });

  describe("Button Name is a digit between 0 and 9 inclusive, as a string", () => {
    const buttonName = '5';
    describe("Previous operation was null", () => {
      const previousOperation = null;
      describe("Previous total was null", () => {
        const previousTotal = null;
        const dataObj = {
          total: previousTotal,
          next: null,
          operation: previousOperation
        };
        const { total } = calculate(dataObj, buttonName);
        it("total now equals the name of the button pressed", () => {
          expect(total).toEqual('5');
        });
      });
      
      describe("Previous total was a number", () => {
        const previousTotal = 0;
        const dataObj = {
          total: previousTotal,
          next: null,
          operation: previousOperation
        };
        const { total } = calculate(dataObj, buttonName);
        it("total now equals the name of the button pressed", () => {
          expect(total).toEqual("5");
        });
      });
      
      describe("Previous total was not a number or null", () => {
        const previousTotal = '5';
        const dataObj = {
          total: previousTotal,
          next: null,
          operation: previousOperation
        };
        const { total } = calculate(dataObj, buttonName);
        it("total now equals the previous total with the pressed button's name appended to it", () => {
          expect(total).toEqual("55");
        });
      });
    });
    
    describe("Previous operation was not null but previous next was", () => {
      const [previousNext, previousOperation] = [null, '+'];
      it('returns a dataObj where the next value is equal to the pressed button', () => {
        const dataObj = {
          total: '1',
          next: previousNext,
          operation: previousOperation
        };
        const { next } = calculate(dataObj, buttonName);
        expect(next).toBe(buttonName);
      });
    });
    
    describe("Previous next and operation were not null", () => {});
    const [previousTotal, previousNext, previousOperation] = ['1', "5", '+'];
    const dataObj = {
      total: previousTotal,
      next: previousNext,
      operation: previousOperation
    };
    it("next now equals the previous next value with the pressed button's name appended to it", () => {
      const { next } = calculate(dataObj, buttonName);
      expect(next).toEqual("55");
    });
  });

  describe("Button Name is a full stop", () => {
    const buttonName = ".";
    describe("Operation is null", () => {
      const previousOperation = null;
      describe("Total is null", () => {
        const previousTotal = null;
        it('returns a dataObj where the total is now equal to "0."', () => {
          const { total } = calculate({
            total: previousTotal,
            next: null,
            operation: previousOperation
          }, buttonName);
          expect(total).toBe('0.');
        });
      });
      describe("Total is not null and it does not already contain a decimal point", () => {
        const previousTotal = '100';
        it('returns a dataObj where the total is now equal to the previous total with a decimal point appended', () => {
          const { total } = calculate(
            {
              total: previousTotal,
              next: null,
              operation: previousOperation
            },
            buttonName
          );
          expect(total).toBe(previousTotal + '.');
        });
      });
    });
    describe("Operation is not null but next is null", () => {
      const [previousTotal, previousNext, previousOperation] = ['50', null, 'X'];
      it("returns a dataObj where the next is now equal to '0.'", () => {
        const { next } = calculate(
          {
            total: previousTotal,
            next: previousNext,
            operation: previousOperation
          },
          buttonName
        );
        expect(next).toBe('0.');
      });
    });
    describe("Neither operation nor next are null and next does not already contain a decimal point", () => {
      const [previousTotal, previousNext, previousOperation] = ['72', '100', "X"];
      it("returns a dataObj whose next is equal to previousNext with a decimal point appended", () => {
        const { next } = calculate(
          {
            total: previousTotal,
            next: previousNext,
            operation: previousOperation
          },
          buttonName
        );
        expect(next).toBe("100.");
      });
    });
  });

  describe("Button Name is an equals sign", () => {
    const buttonName = "=";
    describe("Operation is not null", () => {
      const previousOperation = "÷";
      it('performs the operation using the data in dataObj, sets the result as total and sets operation and next to null', () => {
        const { total, next, operation } = calculate({
          total: '21',
          next: '7',
          operation: previousOperation,          
        }, buttonName);
        expect(total).toBe('3');
        expect(next).toBeNull();
        expect(operation).toBeNull();
      })
    });

  });
});
