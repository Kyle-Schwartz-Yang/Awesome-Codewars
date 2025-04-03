
export {}


type MathOperator = '+' | '-' | '*' | '/';

interface Operation {
  operator: MathOperator;
  operand1: number;
  operand2: number;
}

function basicOp({ operator, operand1: value1, operand2: value2 }: Operation): number | void {

  switch (operator) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      if (value2 === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      return value1 / value2;
    default:
      console.log('is not a valid operator.');
      throw new Error(`${operator} is not a valid operator.`);
      
  }
  
}