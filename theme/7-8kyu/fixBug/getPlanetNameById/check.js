


// Почему id 3 != Earth ?

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'

    case 2:
      name = 'Venus'

    case 3:
      name = 'Earth'

    case 4:
      name = 'Mars'

    case 5:
      name = 'Jupiter'

    case 6:
      name = 'Saturn'

    case 7:
      name = 'Uranus'

    case 8:
      name = 'Neptune'

  }
  return name;
}


const result = getPlanetName(3);

console.log(result)



//  Решение 


// function getPlanetName(id){
//   var name;
//   switch(id){
//     case 1:
//       name = 'Mercury'
// 		  break;
//     case 2:
//       name = 'Venus'
// 		  break;
//     case 3:
//       name = 'Earth'
// 		  break;
//     case 4:
//       name = 'Mars'
// 		  break;
//     case 5:
//       name = 'Jupiter'
// 		  break;
//     case 6:
//       name = 'Saturn'
// 		  break;
//     case 7:
//       name = 'Uranus'
// 		  break;
//     case 8:
//       name = 'Neptune'
// 		  break;
//   }
//   return name;
// }
 

// const result = getPlanetName(6);

// console.log(result)