---
tags:
  - validation
  - string
---
> 🟡 90 % Завдань зі строками спочатку перетворюються у масив - масивом зручніше користуватися 

## Умова для завдання 

Ваше завдання - створити просту функцію перевірки пароля, подібну до тієї, що є на багатьох сайтах.

Правила для правильного пароля наступні:

Повинна бути принаймні 1 велика літера.
Повинна бути принаймні 1 мала літера.
Повинна бути принаймні 1 цифра.
Пароль повинен мати довжину не менше 8 символів.
Ви можете використовувати будь-які методи для перевірки пароля.

```js
console.log(password("Abcd1234")); ===> true
console.log(password("Abcd123")); ===> false
console.log(password("abcd1234")); ===> false
console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890")); ===> true
console.log(password("ABCD1234")); ===> false
console.log(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,")); ===> true
console.log(password("!@#$%^&*()-_+={}[]|\:;?/>.<,")); ===> false
```

---

### `Array` ( mine ) 🟢

```js
function password(str) {
	const arr = [...str];
	const hasUpperCase = arr.some(char => char >= 'A' && char <= 'Z');
	const hasLowerCase = arr.some(char => char >= 'a' && char <= 'z');
	const hasNumber = arr.some(char => char >= '0' && char <= '9' );
	const hasLength = arr.length >= 8;
	
 	return hasUpperCase && hasLowerCase && hasNumber && hasLength;
}
```


### `for cycle` 

```js

function password(str) {
	
	// const arr = [...str]; ???
	
	let hasLength =  str.length >= 8;
	let hasUpperCase = false;
	let hasLowerCase = false;
	let hasNumber = false; 
	
	for(let i = 0; i < str.length; i++) {
		if(str[i] >= 'A' && str[i] <= 'Z') hasUpperCase = true;
		if(str[i] >= 'a' && str[i] <= 'z') hasLowerCase = true;
		if(str[i] >= '0' && str[i] <= '9') hasNumber = true;
	}
	
	return hasUpperCase && hasLowerCase && hasNumber && hasLength;
	
}

```


### `for...of`

```js
function password(password) {
	
  let hasLength =  password.length >= 8;
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  
  for (let char of password) {
    if (char >= 'A' && char <= 'Z') hasUpper = true;
    if (char >= 'a' && char <= 'z') hasLower = true;
    if (char >= '0' && char <= '9') hasNumber = true;
  }
  
  return hasUpper && hasLower && hasNumber && hasLength;
}
```


### `regular` 

```js
function validatePassword(password) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password);
}
```