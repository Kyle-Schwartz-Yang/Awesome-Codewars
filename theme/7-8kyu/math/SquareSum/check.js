
/* First variant : reduce() */

function squareSum(numbers){
	let result = 0;
	 numbers.forEach(item => {
		result += item * item
	})
	
	return result
}


/* Short variant : reduce() */

const squareSum = (numbers) => numbers.reduce((acc, current) => acc += current * current, 0)


/* cycles : for */
function squareSum(numbers){
	let result = 0;

	for(let i = 0; i < numbers.length; i++){
		result += numbers[i] * numbers[i]
	}
	
	return result
}