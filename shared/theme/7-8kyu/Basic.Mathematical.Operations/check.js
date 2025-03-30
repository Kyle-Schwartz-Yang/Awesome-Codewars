

function basicOp(operation, value1, value2){
  //Code

	switch(operation) {
		case '+':
			return  value1 + value2;
		break;
		case '-':
			return value1 - value2;
		break;
		case '*':
			return  value1 * value2;
		break;
		case '/':
			return  value1 / value2;
		break;
		
	default:
		console.log(`${operation} символ не допустим`);
		// throw new Error(`${operation} is not a valid operator.`);
	}

	return 0;
  
}

console.log(basicOp('+', 2, 10))