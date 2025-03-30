#math
### Умова

Вам потрібно створити простий калькулятор, який повертає результат додавання, віднімання, множення або ділення двох чисел.

Ваша функція буде приймати три аргументи:
Перший та другий аргументи повинні бути числами.
Третій аргумент повинен представляти собою знак, що вказує на операцію, яку потрібно виконати над цими двома числами.

Якщо змінні не є числами або знак не належить до наведеного вище списку, має бути повернуто повідомлення "unknown value".

```js
arguments: 1, 2, "+"
should return 3

arguments: 1, 2, "&"
should return "unknown value"

arguments: 1, "k", "*"
should return "unknown value"
```
# Рішення 🟢

### Switch 

```js
function calculator(a,b,sign){
	
//	if( !isFinite(a) || !isFinite(b) ) return 'number Invalid operator'; ⭕
  if (typeof a !== 'number' || typeof b !== 'number') return 'no number';

  switch(sign) {
      
	  case '/':
		  return  a / b;

	  case '*':
		   return a * b;
	
	  case '+':
		   return a + b;
	
	  case '-':
		   return a - b;
		
	  default: 
		  return 'Invalid operator';  
  }
}
```

### codewars 

```js
function calculator(a,b,sign){
	var oper = {
		"+": a + b,
		"-": a - b,
		"*": a * b,
		"/": a / b
	}
	return oper[sign] ? oper[sign] : "unknown value"
}
```

### isFinite()
- також є чудові методи `parseInt('30px')` та `parseFloat('30.3px')` які можуть бути у нагоді 

```js
function calculator(a, b, sign) {
	
	// Спочатку треба зробити аргумент числом якщо то можливо 
	a = Number(a);
	b = Number(b);
	
  // Перевірка, чи обидва значення є числами
   if (!isFinite(a) || !isFinite(b)) {
    return 'Invalid number';  // Повідомлення про неправильне значення
  }

  // Операції в об'єкті
  let oper = {
    "*": a * b,
    "/": a / b,
    "+": a + b,
    "-": a - b,
  }

  // Перевірка, чи існує такий оператор в об'єкті
  return oper[sign] ? oper[sign] : 'unknown';
}


console.log(calculator(2, 2, '+'));
console.log(calculator(2, '2', '+'));
```