import needle from 'needle';

needle.get(
  'http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling', 
  (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});

needle.get(
  'http://localhost:3000/find-by-isbn-author?author=J.K+Rowling', 
  (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});

needle.post(    
  'http://localhost:3000/add-book',
  { bookName: 'Harry Potter and the Philosopher\'s Stone',
    isbn: '978-0-7475-3269-9',
    author: 'J.K Rowling',
    yearPublished: '1997'
  },
  (err, res) => {
    console.log(res.body)   // prints the server’s response “Received a POST request.”
  }
);
