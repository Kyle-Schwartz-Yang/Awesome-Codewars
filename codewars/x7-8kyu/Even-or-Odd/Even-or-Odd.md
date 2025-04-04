
# Минимализм
```js
  function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }
```



# Игра продолжается :
> Поиграемся и запишем числа в массив
```js
  function evenOrOdd(num) {

    let odd = [];
    let even = [];

    for(let i = 0; i < num; i++){
      if(i % 2) {
        odd.push(i)
      }else {
        even.push(i)
      }
    }

    console.log('Odd:', odd);
    console.log('Even:', even);
  }

  evenOrOdd(9)

```