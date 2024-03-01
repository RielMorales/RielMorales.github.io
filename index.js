//A function that checks if a string has numeric character
const isNumeric = x => {
  let i = 0;
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

//A function that checks if a string has upper case character
const isUpperCase = x => {
  let i = 0;
  var character = '';
    while(i < x.length){
      character = x.charAt(i);
      if ((character == character.toUpperCase()) && isNumeric(character) == false){
        return true
      }
      i++
    }
  return false
}

//A function that checks if a string has lower case character
const isLowerCase = x => {
  let i = 0;
  var character = '';
    while(i < x.length){
      character = x.charAt(i);
      if ((character == character.toLowerCase()) && isNumeric(character) == false){
        return true
      }
      i++
    }
  return false
}

// A function for validating if 2 passwords match.
const validatePassword = (x, y) => {
  if (x === y) {  // checks if the two passwords match
    if (x.length >= 8){ //checks if the password has a valid length
      if (isNumeric(x)){  //checks if the password has numeric character
        if (isUpperCase(x)){  //checks if the password has uppercase character
          if (isLowerCase(x)){  //checks if the password has lowercase character
            return true //valid password
          }
        }
      }
    }
  }
  return false //invalid password
}

//A function for reversing the password.
const reversePassword = x => {
  
}

console.log(validatePassword("helloworld", "hello"))
console.log(validatePassword("hello", "hello"))
console.log(validatePassword("hello1234", "hello1234"))
console.log(validatePassword("Hello1234", "Hello1234"))
console.log(validatePassword("HELLO1234", "HELLO1234"))