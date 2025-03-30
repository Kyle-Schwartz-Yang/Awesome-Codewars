
### Умова завдання:

У тебе є список оцінок однокласників (`classPoints`) та твоя оцінка (`yourPoints`). Потрібно перевірити, чи твоя оцінка вища за середню оцінку класу.

**Завдання:**

1. Обчислити середнє значення оцінок однокласників.
    
2. Порівняти свою оцінку з цим середнім значенням.
    
3. Якщо твоя оцінка вища – повернути `true`, інакше `false`.
    

**Важливо:**

- Твоя оцінка **не включена** в список оцінок класу (`classPoints`), тому її потрібно враховувати окремо.

---

### for 

```js

function betterThanAverage(classPoints, yourPoints) {
	
	  let sum = 0;
	  
	  for(let i = 0; i < classPoints.length; i++ ) {
	    
	    sum += classPoints[i];
	  }
  
	    const result =  sum / classPoints.length;
		
		return result < yourPoints
	}
	
const result = betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);
console.log(result);
```


### reduce

```js
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
```


### while 

```js

function betterThanAverage(classPoints, yourPoints) {
	
	let i = 0;
	let sum = 0;
	
	while(i < classPoints.length) {
		sum += classPoints[i];
		i++;
	}
	
	const result = sum / classPoints.length; 
	
	return result < yourPoints

}


const result = betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);
console.log(result);

```