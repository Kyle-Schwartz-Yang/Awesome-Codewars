> Напишіть функцію, яка приймає масив з 10 цілих чисел (від 0 до 9), яка повертає рядок цих чисел у формі номера телефону.

### Приклад

```js
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => повертає "(123) 456-7890"
//Повернений формат має бути правильним, щоб виконати це завдання.
```

- Не забувайте про пробіл після закриваючих дужок!

---


### Інтерполяція `${...}`

```js
function createPhoneNumber (arr) {
 return `(${arr.slice(0, 3).join('')}) ${arr.slice(3,6).join('')}-${arr.slice(6, 10).join('')}`
}
```

### reduce

```js
function createPhoneNumber(numbers) {
  return numbers.reduce((p, c) => p.replace('x', c), "(xxx) xxx-xxxx");
}
```

