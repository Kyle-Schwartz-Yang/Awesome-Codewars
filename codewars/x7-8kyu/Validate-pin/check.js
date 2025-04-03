function validatePIN (pin) {
  //return true or false

	const arr = pin.split('')
	const numArr = arr.map(Number)
	
	for(let item of numArr) {
		if(isNaN(item)) {
			return false
		}
	}
	
	if(pin.length === 4 ||  pin.length === 6) {
		return isFinite(pin);
	}
	
	
	return false
}