- У цій ката вам потрібно піднести до квадрату кожну цифру числа і об’єднати результати.
- Наприклад, якщо передати 9119 у функцію, вийде 811181, тому що 9² — це 81, а 1² — це 1. (81-1-1-81)
- Приклад №2: Вхідне значення 765 повинно повернути 493625, тому що 7² — це 49, 6² — це 36, а 5² — це 25. (49-36-25)
- Примітка: Функція приймає ціле число і повертає ціле число.
- Щасливого кодування!


### toString() [mine]

```js
function squareDigits(num){
  const result =  num.toString().split('').map(num => num * num).join('');
  return parseInt(result);
}
```

### toString [codewars]

```js
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}
//-------------------------------------------------
function squareDigits(num){
  return Number(('' + num).split('').map(n => n*n).join('')); 
}
```

### for [codewars]

```js
function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};
```
