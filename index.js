const isNumeric = x => {
  var i = 0;
  var character = '';
    while(i < x.length){
      character = x.charAt(i);
      if (!isNaN(character * 1)){
        return true
      }
      i++
    }
  return false
}

// A function for validating if 2 passwords match.
const validatePassword = (x, y) => {
  // checks if the two passwords match
  if (x === y) {
    if (x.length >= 8){
      if (isNumeric(x)){
        return true
      }
    }
  }
  return false //invalid password
}

console.log(validatePassword("Hello123","Hello123"))