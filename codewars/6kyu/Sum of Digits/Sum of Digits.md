
## SOLO [MINE]

- MINE
```js
 
function digitalRoot(n) {
	let result = n
	
	do {
	result = result
	  .toString()
	  .split('')
	  .reduce((acc, cur) => +acc + +cur, 0)
	  .toString()
	} while (result.length >= 2);
	
	return Number(result);
}

```

- TypeScript 
```ts
type Fn = (n: number) => number;

const digitalRoot: Fn = (n) => {
    let result: string = n.toString(); // ← одразу приводимо до string
    do {
        result = result
            .split('')
            .reduce((acc, cur) => +acc + +cur, 0)
            .toString();
    } while (result.length >= 2);

    return Number(result); // ← фінальний конверт у число
};
```


## Codewars

- BEST
```js
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
```

## GPT 

- Cycle [UPDATE SOLO]
```js
function digitalRoot(n) {
  let result = n;

  do {
    result = result.toString().split('').reduce((acc, cur) => +acc + +cur, 0);
  } while (result >= 10); // тобто, поки двозначне

  return result;
}
```

- Recursion [UPDATE CODEWAR]
```js
function digital_root(n) {
  if (n < 10) return n;
  
  const sum = n.toString().split('').reduce((acc, cur) => acc + +cur, 0);
  return digitalRoot(sum); // рекурсивно викликаємо для суми
}
```

- Cycle [TypeScript]
```ts
type Fn = (n:number) => number;

const digitalRoot:Fn = (n) => {

    let result: number = n;
    do {
        result = result
        .toString()
        .split('')
        .reduce((acc, cur) => +acc + +cur, 0)
    } while (result >= 10);

    return result;
}
```