# Условие

> Ваша задача - создать функцию, которая выполняет четыре базовые математические операции.
> Функция должна принимать три аргумента - operatio (string/char), value1(number), value2(number).
> Функция должна возвращать результат в виде числа после применения выбранной операции.

```js

('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

```

### best Answer

```js
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}
```
