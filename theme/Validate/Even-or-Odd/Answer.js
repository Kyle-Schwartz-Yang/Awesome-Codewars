/*
  - Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
// 2,4,6, - Even
// 3,7,9, - Odd

// ----------------------------------------------
function evenOrOdd(number) {
  if(number % 2) {
    return 'Odd'
  }

  return 'Even'
}
// ----------------------------------------------

const result = evenOrOdd(9)
console.log(result);

// ----------------------------------------------









