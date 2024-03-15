import needle from 'needle';

needle.get('http://localhost:3000/', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});

needle.get('http://localhost:3000/greeting?name=Riel', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});

needle.post(    
  'http://localhost:3000/submit-data',
  { name: "Riel",
    age: "is just a number" },
  (err, res) => {
    console.log(res.body)   // prints the server’s response “Received a POST request.”
  }
);
