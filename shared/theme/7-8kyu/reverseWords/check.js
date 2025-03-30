





function reverseWords(str) {
  // Go for it
	
  const words = str.split(' ');
    
  const reversedWords =  words.map(word => word.split('').reverse().join(''));

  return reversedWords.join(' ')
}







// ? Решение не совсем верное поскольку нужно было и слова развернуть 

function reverseWords(str) {
  // Go for it
	return  Array.from(str).reverse().join('')
}

console.log(reverseWords('Hello world'))



// -----------------------------------------------------


function reverseWords2(str) {
  // Go for it
	let reversed = '';
	
	for(let i = str.length - 1; i >= 0; i--){
		reversed += str[i]
	}
	
	return reversed
}

console.log(reverseWords2('Hello world'))



