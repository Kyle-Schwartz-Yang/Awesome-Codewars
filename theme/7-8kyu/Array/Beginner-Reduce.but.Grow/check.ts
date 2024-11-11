export {}

function maps(arr: number[]): number | undefined {

	if(arr.length > 0) {
		return arr.reduce((prev, curr) => prev * curr)
	}

  return undefined

}

console.log(maps([1, 2, 3, 4])) // 24