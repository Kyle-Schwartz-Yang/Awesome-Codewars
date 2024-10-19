
# Conditions

- Рахувати кількість символів які повторюються більше одного разу
- Регістр букв не має значення
- Потрібно порахувати кількість РІЗНИХ символів, які повторюються, а не загальну кількість повторень.

### Приклад 

```js
  "abcde" -> 0 (немає повторень)
  "aabbcde" -> 2 (букви 'a' і 'b' повторюються)
  "aabBcde" -> 2 ('a' повторюється двічі і 'b'/'B' вважається як одна буква, що повторюється)
  "indivisibility" -> 1 (тільки 'i' повторюється)
  "aA11" -> 2 (повторюються 'a'/'A' та '1')
```



# Shorty Answer

```js
  function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }
```

# Цикли
```js


function duplicateCount(text) {
    let chars = text.toLowerCase().split('');
    let seen = [];      // Символи, які ми вже бачили
    let duplicates = []; // Символи, які повторюються
    
    for(let char of chars) {
        if(seen.includes(char) && !duplicates.includes(char)) {
            duplicates.push(char);
        }
        seen.push(char);
    }
    
    return duplicates.length;
}

//  Зробимо все на циклах
function duplicateCount(text) {

    let duplicate = text.toLowerCase();
    let counts = [];  // Масив для підрахунку
    let duplicates = 0;
    
    // Рахуємо кількість кожного символу
    for(let i = 0; i < duplicate.length; i++) {
        let char = duplicate[i];
        counts[char] = (counts[char] || 0) + 1;
    }
    
    // Рахуємо символи, які зустрічаються більше одного разу
    for(let i = 0; i < counts.length; i++) {
        if(counts[i] > 1) {
            duplicates++;
        }
    }
    
    return duplicates;

}

```

# Р!шення в!д NPS

```js
function countDuplicates(str) {
  // Приведемо рядок до нижнього регістру, щоб регістр букв не мав значення
  str = str.toLowerCase();

  // Створимо об'єкт для підрахунку частоти символів
  const charCount = {};

  // Підраховуємо кількість кожного символа
  for (const key of str) {
    charCount[key] = (charCount[key] || 0) + 1;
  }

  // Підраховуємо кількість символів, які повторюються більше одного разу
  const duplicatesCount = Object.values(charCount).filter(count => count > 1).length;

  return duplicatesCount;
}
```



