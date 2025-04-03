function fnFilter(arr) {
  // Return a new array with the strings filtered out
  const numberArray = [];

  const filterArray = arr.filter(item => {
    if(typeof item !== 'string') {
      numberArray.push(item);
    }
  })

  return numberArray;
}






/* Осознал что filter итак создает новый массив: */

function fnFilter(arr) {
  // Return a new array with the strings filtered out

  return filterArray = arr.filter(item => {
    if(typeof item !== 'string') return item;
  })

}


const result = fnFilter([1, 2, 'a', 'b', 3, 15, 'c']);

console.log(result);