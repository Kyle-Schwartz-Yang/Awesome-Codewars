

# Условие 

> Банкоматы принимают PIN-коды, состоящие из 4 или 6 цифр. PIN-коды могут содержать только четыре или шесть цифр и не могут содержать ничего другого. Если функция получает корректный PIN-код, она должна вернуть true, в противном случае — false.

- Длина PIN-кода должна быть равной 4 или 6.
- PIN-код должен состоять только из цифр (0-9).
- PIN-код не должен содержать никаких других символов





# NPS answer

```js
  // Рабочий вариант NPS
  function validatePIN(pin) {
      // Проверяем длину
      if (pin.length !== 4 && pin.length !== 6) {
          return false; // Возвращаем false для длин, отличных от 4 или 6
      }
      
      // Проверяем, состоит ли pin только из цифр
      for (let i = 0; i < pin.length; i++) {

          if (pin[i] < '0' || pin[i] > '9') {
            
              return false; // Если хотя бы один символ не цифра
          }
      }
      
      return true; // Если все проверки пройдены, возвращаем true
  }
```



# Codewars answer
```js
  function validatePIN (pin) {
    
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
      
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }
    
    return false;

  }
```