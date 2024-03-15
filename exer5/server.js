import express from 'express';
import { appendFileSync, readFileSync } from 'node:fs';

// instantiate the server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const findBook = (author, isbn) => {
  const books = readFileSync('./books.txt', {encoding: 'utf8', flag: 'r'});
  const book = books.split("\n");
  var resultBooks = [];

  for (let i = 0; i < book.length; i++){
    let bookDetails = book[i].split(",");
    console.log(bookDetails[2]);
    console.log(author);
    if (bookDetails[2] == author){
      resultBooks.push({
        bookName: bookDetails[0],
        isbn: bookDetails[1],
        author: bookDetails[2],
        yearPublished: bookDetails[3]
      });
    }
  }
  
  console.log("ResultBooks")
  console.log(resultBooks);

  if (isbn === undefined){
    return resultBooks;
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

// this tells our app to listen for GET messages on the '/' path
// the callback function specifies what the server will do when a message is received
app.get('/find-by-isbn-author', (req, res) => {
  const resultBooks = findBook(req.query.author, req.query.isbn)  
  res.send(resultBooks);
});

app.post('/add-book', (req, res) => {
  // res.send('Received a POST request: \n' + 'Book Name: ' + req.body.bookName + '\nISBN: ' + req.body.isbn + '\nAuthor: ' + req.body.author + '\nYear Published: ' + req.body.yearPublished);

  //checker if the input has string with lenght 0
  if (!(req.body.bookName.length === 0 || req.body.isbn.length === 0 || req.body.author.length === 0 || req.body.yearPublished.length === 0)) {
    //appending the content of input in books.txt file
    try {
      appendFileSync('books.txt', req.body.bookName +','+req.body.isbn+','+req.body.author+','+req.body.yearPublished+'\n');
      res.json({success: true});
    } catch (err) {
      res.json({success: false});
    }
  } else {
    res.json({success: false});
  }
});

// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => { console.log('Server started at port 3000')} );

