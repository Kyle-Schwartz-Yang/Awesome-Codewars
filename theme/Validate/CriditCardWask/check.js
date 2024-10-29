

// Answer 
function maskify(cc) {

	if(cc.length > 4 ){
		let strLenght = cc.slice(0, -4);
		let mask = '#';
		let repeatedMask =  mask.repeat(strLenght.length);
		return cc.replace(cc.slice(0, -4), repeatedMask);
	}
	
	return cc;
	
}

maskify('Welcomessss')



/*
UPDATE:
- Можно сократить количество переменных 
- Лучше будет изменить условие и сразу что-то возвращать (Читабельность++)
- Используя простую конкатинацию можно отказаться от дополнительного метода replace()
*/

function maskif2y(cc) {

	if(cc.length <= 4 ) return cc;
	
  let repeatedMask =  '#'.repeat(cc.slice(0, -4).length)
  return repeatedMask + cc.slice(-4)

}


console.log(maskif2y('Weslssscsome1'))


// ------------------------------------------------------------------

/* Нравиться решение  */

function maskify(cc) {
  if (cc.length <= 4) return cc;

  const unmaskedLength = cc.length - 4;
  return "#".repeat(unmaskedLength) + cc.slice(-4);
}


