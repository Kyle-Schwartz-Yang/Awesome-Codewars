


# NPS 

```js 
function timeSinceMidnight(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000;
}
```


# Use `new Date()`


```js

function timeSinceMidnight(h, m, s) {
    // Текущее время с переданными h, m, s
    const now = new Date();
    now.setHours(h);
    now.setMinutes(m);
    now.setSeconds(s);
    now.setMilliseconds(0); // Обнуляем миллисекунды

    // Полночь — это 00:00:00
    const midnight = new Date();
    midnight.setHours(0);
    midnight.setMinutes(0);
    midnight.setSeconds(0);
    midnight.setMilliseconds(0); // Обнуляем миллисекунды

    // Возвращаем разницу в миллисекундах
    return now.getTime() - midnight.getTime();
}

// Примеры использования:
console.log(timeSinceMidnight(1, 30, 15)); // 5415000 миллисекунд

```

