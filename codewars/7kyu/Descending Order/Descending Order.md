
Ваша задача - написати функцію, яка може приймати в якості аргументу довільне невід'ємне ціле число і повертати його цифрами у порядку спадання. По суті, переставити цифри так, щоб отримати максимально можливе число.

---
### Examples:

```
	Input: `42145` Output: `54421`
	Input: `145263` Output: `654321`
	Input: `123456789` Output: `987654321`
```

----

## MINE

```js
function descendingOrder(n){
  const res =  n
  .toString()
  .split('')
  .sort((a, b) => b - a)
  .join('');
  
  return parseInt(res)
}
```
- UPDATE 
```js
function descendingOrder(num){
  return +String(num).split('').sort().reverse().join('')
}
```
## CODEWARS

```js
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
```


