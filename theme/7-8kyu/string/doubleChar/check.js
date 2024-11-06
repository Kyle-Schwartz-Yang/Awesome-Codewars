


function doubleChar(str) {
  // Your code here
	let word = '';
  for(let char of str) {
  	word += char.repeat(2)
  }

	return word
}


const result = doubleChar('Второй');

console.log(result);