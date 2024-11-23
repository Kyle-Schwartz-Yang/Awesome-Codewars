





function isPrime(num) {
   
  // Якщо число менше або рівне 1, воно не просте
  if (num <= 1) return false;

  // Якщо число дорівнює 2, це просте число
  if (num === 2) return true;


 for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // Если есть делитель, число не простое
    }
  }
	

return true;
}


console.log(isPrime(2)) // true
console.log(isPrime(3)) // true
console.log(isPrime(5)) // true

console.log(isPrime(7)) // true
console.log(isPrime(9)) // false
console.log(isPrime(11)) // true



/*
- Улучшение: (при роботе с большими числами )


 : Math.sqrt получает корень, что помогает уменьшить количество итераций вместо 1 000 000 до 1000
 for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;  // Если есть делитель, число не простое
    }
  }

: Сокращает вычисление в два раза, вместо 1 000 000 до 500 000
 for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;  // Если есть делитель, число не простое
    }
  }

*/


/*
- Другие способы получить корень числа:

console.log(Math.sqrt(36)) // 6
console.log(36 ** 0.5) // 6

Использование Math.pow(36, 0.5) // 6

*/


