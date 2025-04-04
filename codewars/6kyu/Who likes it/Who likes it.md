Ти, напевно, знайомий із системою "лайків" на Facebook та інших платформах. Люди можуть "лайкати" пости, зображення або інші елементи. Ми хочемо створити текст, який має відображатися поруч із таким елементом.

Реалізуй функцію, яка приймає масив із іменами людей, що поставили "лайк". Вона повинна повертати текст для відображення відповідно до наведених прикладів:

```js

- `[]` → `"no one likes this"` (ніхто не вподобав це)
    
- `["Peter"]` → `"Peter likes this"` 
  (Пітер вподобав це)
    
- `["Jacob", "Alex"]` → `"Jacob and Alex like this"` 
  (Якоб і Алекс вподобали це)
    
- `["Max", "John", "Mark"]` → `"Max, John and Mark like this"` 
  (Макс, Джон і Марк вподобали це)
    
- `["Alex", "Jacob", "Mark", "Max"]` → `"Alex, Jacob and 2 others like this"` (Алекс, Якоб і ще 2 особи вподобали це)
```

**Примітка**: для 4-х і більше імен число в `"and 2 others"` просто збільшується.


---

### `switch` [mine]

```js
function likes(names) {
  
	if(names.length === 0) return 'no one likes this';

	switch (true) {
		case names.length === 1:
			return `${names[0]} likes this`;
		case names.length === 2:
			return `${names[0]} and ${names[1]} like this`;
		case names.length === 3:
			return `${names[0]}, ${names[1]} and ${names[2]} like this`;
		case names.length >= 4:
			return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
		default:
			return 'Ops!'
	}
}

```


### `switch` [GPT]

```js
function likes(names) {
  switch (true) {
    case names.length === 0:
      return 'no one likes this';
    case names.length === 1:
      return `${names[0]} likes this`;
    case names.length === 2:
      return `${names[0]} and ${names[1]} like this`;
    case names.length === 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    case names.length >= 4:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    default:
      return 'Unexpected input';
  }
}
```

### `switch` [codewars]

```js
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}
```

### `Math.min()` [codewars]

```js
function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}
```

