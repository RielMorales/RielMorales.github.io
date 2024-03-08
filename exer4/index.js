//import of uuid package
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

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
  //used the generateUnique ID function to generate unique ID
  const uniqueID = generateUniqueID(firstName, lastName);
  //checks if name inputs are empty
  if (uniqueID == "First Name is Empty" || uniqueID == "Last Name is Empty") return "First Name or Last Name input is empty";
  if (validator.isEmail(email)){ //checks if email is valid
    if (isNumber(age)){ //checks if the input is number
      try{
        // return firstName + "," + lastName + "," + email + "," + age.toString() + "," + uniqueID;

        //adding the account details in users.txt file
        appendFileSync('users.txt', firstName + "," + lastName + "," + email + "," + age.toString() + "," + uniqueID + "\n");
        return true;
      }catch (err){
        return false;
      }

    } else {
      console.log(age.toString() + " is not a valid input.\nInput must be a number.");
      return false;
    }
  } else {
    console.log(email + " is not a valid email");
    return false;
  }

}

export {generateUniqueID, addAccount};