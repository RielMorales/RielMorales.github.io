// A function for validating if 2 passwords match.
const validatePassword = (x, y) => {
  // checks if the two passwords match
  if (x === y) {
    return true
  }
  return false //invalid password
}

console.log(validatePassword("Hello123","Hello123"))