# Условие

> Зазвичай, коли ви щось купуєте, вас запитують, чи номер вашої кредитної картки, номер телефону чи відповідь на ваше найпотаємніше запитання досі правильні. Однак, оскільки хтось може зазирнути вам через плече, ви не хочете, щоб це відображалося на вашому екрані. Натомість ми маскуємо це.

- Ваше завдання — написати функцію maskify, яка змінює всі символи, крім останніх чотирьох, на '#'.

```js

// Пример маски:
  "4556364607935616" ==> "############5616"
      "64607935616" ==>      "#######5616"
                "1" ==>                "1"
                  "" ==>                 ""
  "Skippy" ==> "##ippy"
  "Welcome" ==> "###come"

```

### NPS Answer

```js
// -------------------------------------------------------------
// Ответ

function maskify(cc) {
  if (cc.length <= 4) return cc;
  const maskedPart = "#".repeat(cc.length - 4);
  return maskedPart + cc.slice(-4);
}
// -------------------------------------------------------------
/* Использование Тернарного оператора */

const maskify = (cc) =>
  cc.length > 4 ? "#".repeat(cc.length - 4) + cc.slice(-4) : cc;

// -------------------------------------------------------------

/* Использование регулярного выражения */
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

// -------------------------------------------------------------

/* Использование Циклов */
function maskify(cc) {
  let masked = "";

  // Проходимся по каждому символу, кроме последних четырех
  for (let i = 0; i < cc.length - 4; i++) {
    masked += "#";
  }

  // Добавляем последние четыре символа (или меньше, если строка короткая)
  return masked + cc.slice(-4);
}
```
