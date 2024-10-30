# Условие

> В этом задании вам нужно написать функцию, которая проверяет, содержится ли заданное значение x в массиве a. 
> Массив может содержать как числа, так и строки, а значение x может быть любым (числом или строкой).

### Требования:
- Функция принимает два параметра: массив a и значение x.
- Нужно вернуть true, если значение x присутствует в массиве a.
- Нужно вернуть false, если значение x отсутствует в массиве a.

### Пример:
- Для входных данных `([1, 2, 3, 4], 3)` функция должна вернуть true, так как `3` содержится в массиве.
- Для входных данных `(['apple', 'banana', 'orange'], 'grape')` функция должна вернуть false, так как `'grape'` нет в массиве.

### Минимализм

```js
  // 
  const check = (a, x) => a.includes(x);

  // Использовать метод some()
   const check = (a, x) => a.some( v => v == x )
```

### Использовать Флаг

``` js

function check( arr, x ) {
  let foundTarget = false; // Создать флаг

  arr.forEach( i =>{
    if ( i == x ){ foundTarget = true } // Изменить состояние флага
  })

  return foundTarget // Вернуть флаг
}

```