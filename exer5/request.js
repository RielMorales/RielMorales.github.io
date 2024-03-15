import needle from 'needle';

needle.post(    
  'http://localhost:3000/add-book',
  { bookName: 'Harry Potter and the Philosopher\'s Stone',
    isbn: '978-0-7475-3269-9',
    author: 'J.K Rowling',
    yearPublished: '1997'
  },
  (err, res) => {
    console.log(res.body)   // prints the server’s response
  }
);

needle.post(    
  'http://localhost:3000/add-book',
  { bookName: 'Harry Potter and the Chamber of Secrets',
    isbn: '0-7475-3849-2',
    author: 'J.K Rowling',
    yearPublished: '1998'
  },
  (err, res) => {
    console.log(res.body)   // prints the server’s response 
  }
);

needle.post(    
  'http://localhost:3000/add-book',
  { bookName: 'The Little Prince',
    isbn: '978-0156012195',
    author: 'Antoine Saint-Exupery',
    yearPublished: '1943'
  },
  (err, res) => {
    console.log(res.body)   // prints the server’s response 
  }
);


needle.get(
  'http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling', 
  (err, res) => {
    console.log(res.body);   // prints the body of the response message.
});

needle.get(
  'http://localhost:3000/find-by-isbn-author?author=J.K+Rowling', 
  (err, res) => {
    console.log(res.body);   // prints the body of the response message.
});

needle.get(
  'http://localhost:3000/find-by-isbn-author?author=Antoine+Saint-Exupery', 
  (err, res) => {
    console.log(res.body);   // prints the body of the response message.
});