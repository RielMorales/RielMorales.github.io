//import of uuid package
import { v4 as uuidv4 } from 'uuid';

// A function use to generate unique id based on first and last name.
// it uses uuid package to generate a unqiue id
const generateUniqueID = (firstName, lastName) => {
  //check if the first and last name is empty
  if (firstName.length === 0) return "First Name is Empty";
  if (lastName.length === 0) {
    return "Last Name is Empty";
  } else {
    //creating unique id with a length of 8
    const uniqueID = uuidv4().slice(0, 8)
    //returning the generated unique id
    return firstName.toLowerCase().slice(0,1) + lastName.toLowerCase() + uniqueID;
  }
}

export {generateUniqueID};