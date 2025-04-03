---
tags:
  - string
---


Напиши функцію, яка приймає рядок з одного або більше слів і повертає цей же рядок, але всі слова, що містять **п'ять або більше літер**, мають бути перевернуті (точно як у назві цієї Кати).

Рядки, що передаються у функцію, міститимуть лише літери та пробіли. Пробіли будуть присутні лише у випадку, якщо в рядку більше одного слова.

```js
"Hey fellow warriors"  --> "Hey wollef sroirraw"  
"This is a test"        --> "This is a test"  
"This is another test"  --> "This is rehtona test"  
```

----


### `map()` + `reverse()` [mine]

```js

function spinWords(str){
  return str.split(' ').map(word => {
  		if(word.length >= 5) return word.split('').reverse().join('')
	  return word
  }).join(' ')
}

//------------------------------------------------------------------

function spinWords(string){
  return string.split(' ').map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word
  }).join(' ')
}

```



### for [codewars]


```js
function spinWords(str) {
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5)
      strArr[i] = strArr[i].split('').reverse().join('');
  }
  return strArr.join(' ');
}
```

