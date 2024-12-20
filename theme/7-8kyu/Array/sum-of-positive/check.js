
function positiveSum(arr) {
  if(arr.length <= 0) return 0;

	let sum = 0;
	
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] < 0) continue
		
		sum += arr[i]  
	}
	
	return sum
}


const result = positiveSum([1,2, -4])

console.log(result)


/*

1. Проверка длины массива: Условие if(arr.length <= 0) return 0; избыточно. Если массив пустой, 
  цикл for просто не выполнится, и функция всё равно вернёт 0. Поэтому эту проверку можно убрать.

2. Цикл с continue: Использование continue прерывает текущую итерацию, если значение отрицательное, 
  но это немного усложняет читаемость кода. Вместо этого можно просто проверять, является ли элемент положительным, и добавлять его к сумме.

3. Альтернативный подход с filter и reduce. Применение методов может сократить код

*/


// Код стал более декларативным
function positiveSum(arr) {
  return arr
    .filter(num => num > 0) // Оставляем только положительные числа
    .reduce((sum, num) => sum + num, 0); // Суммируем их, начальное значение — 0
}