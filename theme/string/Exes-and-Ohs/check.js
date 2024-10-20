
/*


(1)
return coutO.length === coutX.length
зам!сть умови тому що ! так отримуэмо bolean

*/


/* Первое решение */
function equalChars(str) {

  const duplicates = Array.from(str.toLowerCase());

  let coutX = [];
  let coutO = [];

  duplicates.forEach(item => {
    if (item === 'x'){
       coutX.push(item)
    } else if (item === 'o') {
       coutO.push(item)
    }
  })


  // Можно улучшить (1)
  if(coutO.length === coutX.length) {
    return true
  }

  return false

}


const result = equalChars('ooxxfdsfa')

console.log(result)



/*Друге р!шення */

function equalChars(str) {
  let countX = 0;
  let countO = 0;

  for (let char of str.toLowerCase()) {
    if (char === 'x') {
      countX++;
    } else if (char === 'o') {
      countO++;
    }
  }

  return countX === countO;
}

