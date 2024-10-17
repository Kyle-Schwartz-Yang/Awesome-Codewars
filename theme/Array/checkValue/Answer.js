

function check(a, x) {
  // your code here

  for(let i = 0; i < a.length; i++) {
    if(a[i] === x){
      return true
    }
  }

  return false
}

const result = check([1, 'apple', 3, 4], 'apple');

console.log(result); // true




