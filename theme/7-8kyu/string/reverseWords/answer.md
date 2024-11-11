> Выполните функцию, которая принимает строковый параметр и меняет местами каждое слово в строке. Все пробелы в строке должны быть сохранены.

<!-- ! Лучший ответ  -->

```js
function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// ------------------------------------------------------------------

function reverseWords(str) {
  return str
    .split(" ")
    .map((str) => str.split("").reverse().join(""))
    .join(" ");
}
```

<!-- ? Разворачиваем буквы, но не слова  -->

```js
//Рекурсивный подход
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}

const reversed = reverseString("Hello");
console.log(reversed); // "olleH"
```
