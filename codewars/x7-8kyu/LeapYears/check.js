

function isLeapYear(year) {
  const date = new Date(year, 1, 29); // Пытаемся создать 29 февраля
  return date.getDate() === 29;
}



//--------------------------------------

function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}


// --------------------------------

function isLeapYear(year) {
  if(0 == year%400) return true;
  if(0 == year%100) return false;
  if(0 == year%4) return true;
  return false;
}
