---
tags:
  - string
---


Доповніть рішення так, щоб воно розбивало рядок на пари з двох символів. Якщо рядок містить непарну кількість символів, то воно повинно замінити відсутній другий символ останньої пари підкресленням ('_').

```js
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
```

---

### for 

```js
function solution(str){
   let result = [];
	
	for(let i = 0; i < str.length; i += 2){
		let res = str[i] + (str[i + 1] || "_")
		result.push(res);
	}
	
	return result;
}
```

### Regular 

```js

// ВАРИАНТ ДВА # 1

function solution(str){
   return (str + "_").match(/.{2}/g) || []
}

// ВАРИАНТ ДВА # 2

function splitPairs(str) {
  // Якщо рядок має непарну довжину, доповнюємо його символом '_'
  if (str.length % 2 !== 0) {
    str += '_';
  }
  return str.match(/.{2}/g) || [];
}
```

