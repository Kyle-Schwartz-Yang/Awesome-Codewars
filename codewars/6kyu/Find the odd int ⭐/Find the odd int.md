### **Завдання:**  

Дано масив цілих чисел. Знайдіть єдине число, яке зустрічається **непарну кількість разів**.

Завжди буде **лише одне** ціле число, яке зустрічається непарну кількість разів.

**Приклади:**

- `[7]` має повернути `7`, оскільки зустрічається 1 раз (а 1 — непарне число).
    
- `[0]` має повернути `0`, оскільки зустрічається 1 раз (непарне число).
    
- `[1, 1, 2]` має повернути `2`, оскільки зустрічається 1 раз (непарне).
    
- `[0, 1, 0, 1, 0]` має повернути `0`, оскільки зустрічається 3 рази (непарне).
    
- `[1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]` має повернути `4`, бо воно зустрічається 1 раз (непарне).

---

## for [false] 🔴

```js
function findOdd(arr) {

	const arrayCount = {};
	
	for (let i = 0; i < arr.length; i++) {
		const key = arr[i];
		if (arrayCount[key]) {
			arrayCount[key] += 1;
		} else {
			arrayCount[key] = 1;
		}
	}

	for(let key in arrayCount) {
		if (arrayCount[key] % 2 !== 0) {
			return Number(key); // бо key — це рядок
		}
	}
}

const result = findOdd([5, 5, 2, 2, 8]);
console.log(result); // 8
```


---
## find [codewars] 

```js
function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}
```

## reduce [codewars]

```js
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
```


## forEach [codewars]

```js
function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}
```


## new Map [GPT]

```js
function findOdd(arr) {
  const map = new Map();

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, count] of map) {
    if (count % 2 !== 0) return key;
  }
}
```


## new Set [GPT]

```js
function findOdd(arr) {
  const map = new Map();

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, count] of map) {
    if (count % 2 !== 0) return key;
  }
}
```



## Class [GPT] - тренування ООП

```js
class OddFinder {
  constructor(numbers) {
    this.numbers = numbers;
    this.counts = {};
  }

  countOccurrences() {
    for (const num of this.numbers) {
      if (this.counts[num]) {
        this.counts[num] += 1;
      } else {
        this.counts[num] = 1;
      }
    }
  }

  findOdd() {
    this.countOccurrences();

    for (const key in this.counts) {
      if (this.counts[key] % 2 !== 0) {
        return Number(key);
      }
    }
  }
}

// 🔍 Тест
const finder = new OddFinder([1, 1, 2, 2, 3, 3, 3]);
console.log(finder.findOdd()); // 👉 3
```