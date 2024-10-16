let arr = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

// -----------------------------------------------------

function countSheeps(sheep) {
  // TODO
const result = sheep.filter(item => {
  if(item) return item
  })

  return result.length
}

console.log(countSheeps(arr)); //17





