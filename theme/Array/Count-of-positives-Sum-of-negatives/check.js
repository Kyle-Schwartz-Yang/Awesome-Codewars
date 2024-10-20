


function countPositivesSumNegatives(input) {
  // your code here
  
  if(!input || input.length === 0) return []

  let countPositive = 0;
  let sumNegative = 0;



   input.filter(item => {
    if(item > 0) {
      countPositive++
    }
    if(item < 0){
      sumNegative += item
    }

  })


  return [countPositive, sumNegative]
    
}


const res = countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);


console.log(res);