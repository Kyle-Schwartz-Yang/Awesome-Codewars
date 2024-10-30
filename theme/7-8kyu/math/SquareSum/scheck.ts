
export {}

/* First variant : reduce() */

function squareSum(numbers: number[]): number{
	let result: number = 0;
	 numbers.forEach((item: number) => {
		result += item * item
	})
	
	return result
}


/* Short variant : reduce() */

const squareSum2 = (numbers: number[]): number => 
    numbers.reduce((acc:number, current: number) => acc += current * current, 0)


/* cycles : for */
function squareSum3(numbers: number[]): number {
	let result: number = 0;

	for(let i: number = 0; i < numbers.length; i++){
		result += numbers[i] * numbers[i]
	}
	
	return result
}