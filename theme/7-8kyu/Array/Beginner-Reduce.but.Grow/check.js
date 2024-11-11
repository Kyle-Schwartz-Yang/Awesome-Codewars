

function maps(arr){
	if(arr.length > 0) {
		return arr.reduce((prev, curr) => prev * curr)
	}
}

console.log(maps([1, 2, 3, 4])) // 24