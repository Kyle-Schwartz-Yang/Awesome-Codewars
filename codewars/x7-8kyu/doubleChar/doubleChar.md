# Условие:

> Задав строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.

### Examples (Input -> Output):

```js
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
```

### BEST ANSWER

```js
// Первый вариант
function doubleChar(str) {
  var word = "";
  for (var i = 0; i < str.length; i++) {
    word = word + str[i] + str[i];
  }
  return word;
}

// --------------------------------------------------------
//Второй вариант
const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");
```
