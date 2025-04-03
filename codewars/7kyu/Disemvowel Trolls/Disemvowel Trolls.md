---
tags:
  - string
  - validation
---
# Умова завдання 

Тролі атакують твій розділ коментарів!

Звичний спосіб впоратися з цією ситуацією — видалити всі голосні з коментарів тролів, нейтралізуючи загрозу.

Твоє завдання — написати функцію, яка приймає рядок і повертає новий рядок без голосних.

Наприклад, рядок `"This website is for losers LOL!"` перетвориться на `"Ths wbst s fr lsrs LL!"`.

**Примітка:** для цієї кати літера **"y"** не вважається голосною.

```js
'a', 'e', 'i', 'o', 'u'
```

---

### filter() [mine]
 
```js
function disemvowel(str) {
   return str
   .split('') //Array
   .filter(char => !['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase()))
   .join(''); //String
}

//----------------------------------------------------------

function disemvowel(str) {
  return str
    .split('')
    .filter(char => !'aeiou'.includes(char.toLowerCase()))
    .join('');
}
```



### replace() + regular [codewars]

```js
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
```
