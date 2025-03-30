#Array

---

>  Якщо масив цілих чисел не пустий, повернути результат помноження значень по порядку :
>  `[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24`

---

### reduce  [1]

```js
const grow = x => x.reduce( ( a, b ) => a * b );
```

### cycles for [2]

```js
function grow(arr){
	let result = 1;

	if(arr.length === 0) return 'Пустий масив'

	for(let i = 0; i < arr.length; i++) {
			 result = arr[i] * result;
		}

	return result
}
```

### recursio [3]

```js
const arr = [3, 2];


function grow(arr, i = 0){
	if (i === arr.length) return 0; // Базовий випадок (обов'язково для recursio)
	
	return arr[i] + grow(arr, i + 1)
}

```

