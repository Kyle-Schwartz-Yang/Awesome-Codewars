---
tags:
  - string
  - validation
---

### Умова 

---

> Поверніть кількість голосних у заданому рядку.
> Ми будемо вважати голосними літери: **a, e, i, o, u** (але не **y**)
> Вхідний рядок міститиме лише **рядкові літери та/або пробіли**.

---

### filter (mine)

`str.split().filter( includes() ).length`

```js
function getCount(str) {
 return str.split('').filter(char => 'aeiou'.includes(char)).length
}
```

### regular (codewars)

```js
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
```

### for (codewars)

```js
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}
```