

1. Не зовс!м вдале використання методу `.filter` краще буде `forEach`


```js

  function countPositivesSumNegatives(input: number[] | null): [number, number] | [] {
    // Перевірка на null або порожній масив
    if (!input || input.length === 0) return [];

    let countPositive = 0; // Лічильник позитивних чисел
    let sumNegative = 0;   // Сума негативних чисел

    // Проходимо через кожен елемент масиву
    input.forEach(item => {
      if (item > 0) {
        countPositive++; // Збільшуємо лічильник позитивних чисел
      } else if (item < 0) {
        sumNegative += item; // Додаємо негативне число до суми
      }
    });

    // Повертаємо масив з лічильником і сумою
    return [countPositive, sumNegative];
  }

```