

/*
# Цель:
- Рахувати кількість символів які повторюються більше одного разу
- Регістр букв не має значення
- Потрібно порахувати кількість РІЗНИХ символів, які повторюються, а не загальну кількість повторень.


# Шаги:
  1. Перетворити в массив и надати один вид .toLowercase()
  2. Знайти символи як! повторюються 
  3. Створити массив символ!в як! повторюются. 
  4. Повернути довжину массиву т!льки уникальних дубл!кат!в 

*/


function duplicateCount(text) {

	const chars = Array.from(text, (item) => {
		return item.toLowerCase()
	});

	const duplicates = chars.filter((item, index, array) => {
		return array.indexOf(item) !== index;
	})

  /*
  # Використати метод .some()
    const duplicates = chars.filter((item, index) => {
        return chars.some((char, idx) => char === item && idx !== index);
    });
  */

  // const o = new Set(duplicates) // {b,c,e}

  console.log(duplicates)
	const uniqueArray = [...new Set(duplicates)]; // Щоб уникнути повторень, знайти кількість унікальних дублікатів

	return uniqueArray.length;

}


const result = duplicateCount('indivisibility');

console.log(result)


