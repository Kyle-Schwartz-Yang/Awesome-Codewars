
export { }; // Превращает файл в модуль


function countPositivesSumNegatives(input: number[] | null): [number, number] | null {
  // your code here

  if (!input || input.length === 0) return [0, 0]

  let countPositive: number = 0;
  let sumNegative: number = 0;



  input.filter(num => {
    if (num > 0) {
      countPositive++
    }
    if (num < 0) {
      sumNegative += num
    }

  })


  return [countPositive, sumNegative]

}


const res = countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);


console.log(res);