import express from 'express';
import { appendFileSync, readFileSync } from 'node:fs';

// instantiate the server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//funtion that finds the book details in the text file books.txt
//it returns the book details as an object
const findBook = (author, isbn) => {
  const books = readFileSync('./books.txt', {encoding: 'utf8', flag: 'r'});
  const book = books.split("\n");
  let resultBooks = [];

  for (let i = 0; i < book.length; i++){
    let bookDetails = book[i].split(",");
    if (bookDetails[2] == author){
      resultBooks.push({
        bookName: bookDetails[0],
        isbn: bookDetails[1],
        author: bookDetails[2],
        yearPublished: bookDetails[3]
      });
    }
  }

  //checks if the queries are in the txt file.
  if (resultBooks.length === 0){
    return ("Author: "+author+" and ISBN: "+isbn+" is not found in the database");
  }

  //if there is no isbn in query, it will return all of the books in txt file written by the author in query
  if (isbn === undefined){
    return resultBooks;
  //if there is isbn, it will return the exact book in the txt file
  } else {
    let result = [];
    for (let i = 0; i < resultBooks.length; i++){
      for (var key in resultBooks[i]){
        if (resultBooks[i][key].indexOf(isbn)!=-1){
          return resultBooks[i];
        }
      }
    }
  }
}

//function that checks if the new book's isbn to be added is unique in the database.
//if it exist, it will return true, else it will return false.
const findISBN = (isbn) => {
  const books = readFileSync('./books.txt', {encoding: 'utf8', flag: 'r'});
  const book = books.split("\n");
  var resultBooks = [];

  for (let i = 0; i < book.length; i++){
    let bookDetails = book[i].split(",");
    if (bookDetails[1] == isbn){
      return true;
    }
  }
  return false;
}

// this tells our app to listen for GET messages on the '/' path
// the callback function specifies what the server will do when a message is received
app.get('/find-by-isbn-author', (req, res) => {
  const resultBooks = findBook(req.query.author, req.query.isbn)  
  res.send(resultBooks);
});

app.post('/add-book', (req, res) => {
  //checker if the input has string with lenght 0
  if (!(req.body.bookName.length === 0 || req.body.isbn.length === 0 || req.body.author.length === 0 || req.body.yearPublished.length === 0)) {
    //checks if the isbn does not exist in the database before adding it
    if (findISBN(req.body.isbn) == false){
      //appending the content of input in books.txt file
      try {
        appendFileSync('books.txt', req.body.bookName +','+req.body.isbn+','+req.body.author+','+req.body.yearPublished+'\n');
        res.json({success: true});
      } catch (err) {
        // console.log('Failed to write book details in the database');
        res.json({success: false});
      }
    } else {
      // console.log('ISBN exist in the database');
      res.json({success: false});
    }
    
  } else {
    res.json({success: false});
  }
});

// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => { console.log('Server started at port 3000')} );

