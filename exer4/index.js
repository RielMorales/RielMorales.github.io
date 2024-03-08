//import of uuid package
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

// A function use to generate unique id based on first and last name.
// it uses uuid package to generate a unqiue id
const generateUniqueID = (firstName, lastName) => {
  //check if the first and last name is empty
  if (firstName.length === 0) return "First Name is Empty";
  if (lastName.length === 0) {
    return "Last Name is Empty";
  } else {
    //creating unique id with a length of 8
    const uniqueID = uuidv4().slice(0, 8);
    //returning the generated unique id
    return firstName.toLowerCase().slice(0,1) + lastName.toLowerCase() + uniqueID;
  }
}

function isNumber(value) {
  return typeof value === 'number';
}

//A function use to add the details input by user to the list of accounts in a file named users.txt
const addAccount = ([firstName, lastName, email, age]) => {
  const uniqueID = generateUniqueID(firstName, lastName);
  if (uniqueID == "First Name is Empty" || uniqueID == "Last Name is Empty") return "First Name or Last Name input is empty";
  if (validator.isEmail(email)){
    if (isNumber(age)){
      return firstName + ", " + lastName + ", " + email + ", " + age.toString() + ", " + uniqueID;
    } else {
      return age.toString() + " is not a valid input.\nInput must be a number."
    }
  } else {
    return email + " is not a valid email"
  }

}

export {generateUniqueID, addAccount};