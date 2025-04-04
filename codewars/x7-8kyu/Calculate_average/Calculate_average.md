# Условие

> Напишіть функцію, яка обчислює середнє значення чисел у заданому масиві.

- Примітка. Порожні масиви мають повертати 0.

### Середнє значення чисел це:

- Сумма всех чисел в массиве
- Разделить на количество чисел в масиве

`(3 + 1 + 3 + 2) / 4`

## Best Answer

```js
var find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};
```

### Циклы

```js
function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
  var result = 0;
  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result / array.length;
}
```
