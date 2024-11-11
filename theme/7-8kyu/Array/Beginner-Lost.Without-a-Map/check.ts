export {}


function maps(x: number[]): number[] {
  return x.map(item => item * 2)
}

console.log(maps([1,2,3]))