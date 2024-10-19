
function past(h, m, s){
  //#Happy Coding! ^_^
	  let second = s * 1000;
		let minute = m * 60 * 1000;
		let hour = h * 3600 * 1000;
		
  	const result = hour + minute + second;
		return result;
}

console.log(past(1, 30, 15)) // 5415000