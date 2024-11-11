> Если задан непустой массив целых чисел, верните результат умножения их значений по порядку. Пример:

```js
// Example
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24



// -----------------------------------------


const grow=x=> x.reduce((a,b) => a*b);

// -----------------------------------------


function maps(arr){
	let result = 1;

	if(arr.length > 0) {
		for(let i = 0; i < arr.length; i++) {
			 result = arr[i] * result;
		}
	}

	return result
}

```
