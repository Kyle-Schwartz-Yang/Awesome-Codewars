---
tags:
  - math
  - number
  - Array
  - XOR
---

# Умова 

Напишіть функцію під назвою `findUnique`, яка повертає єдине унікальне число з масиву.

Усі числа в невідсортованому масиві присутні двічі, за винятком одного, яке потрібно знайти. Числа завжди є дійсними цілими значеннями в діапазоні від 1 до 2147483647, тому немає потреби в перевірці типів і помилок.

Масив містить щонайменше одне число і може містити мільйони чисел, тому переконайтеся, що ваше рішення оптимізоване за швидкістю.

```js
[ 1, 8, 4, 4, 6, 1, 8 ] ==> 6
```
---

### reduce та Operator XOR (`^`)

```js
function findUnique(arr) {
    return arr.reduce((acc, num) => acc ^ num, 0);
}
```


### for 


```js

function findUnique(numbers) {
	const result = {}
	
	for(const num of numbers) {
		result[num] = (result[num] || 0) + 1;
	}
	
	for(const key in result) {
		if(	result[key] === 1 ) return Number(key)
	}
}
```