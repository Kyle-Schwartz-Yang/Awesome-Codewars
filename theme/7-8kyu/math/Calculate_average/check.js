
// Получить среднее арифмитическое 

function findAverage(array) {
  if(array.length <= 0) return 0;
  
  const sum = array.reduce((acc, cur) => acc + cur, 0);
  return sum / array.length;
}



// Update variant


function findAverage(array) {
  if(array.length < 0) return 0;
  
  return array.reduce((acc, cur) => acc + cur, 0) / array.length
  
}