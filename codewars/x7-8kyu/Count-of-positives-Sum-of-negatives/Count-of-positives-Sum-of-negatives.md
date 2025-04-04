

# NPS

```js

  function countPositivesSumNegatives(input) {
      // Перевіряємо чи масив не пустий або не null
      if (!input || input.length === 0) return [];
      
      let positiveCount = 0;
      let negativeSum = 0;
      
      // Перебираємо масив
      for(let num of input) {
          if(num > 0) {
              positiveCount++; // Рахуємо кількість додатних
          } else if(num < 0) {
              negativeSum += num; // Додаємо від'ємні
          }
      }
      
      return [positiveCount, negativeSum];
  }

```

# codewars 

```js 
  function countPositivesSumNegatives(input) {
      if (input == null || input.length == 0)
        return [];
      
      var positive = 0;
      var negative = 0;
      
      for (var i=0, l=input.length; i<l; ++i)
      {
        if (input[i] > 0)
          ++ positive;
        else
          negative += input[i];
      }
      
      return [positive, negative];
  }
```

### sworty anser

```js 
  function countPositivesSumNegatives(input) {
      return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
  }
```




