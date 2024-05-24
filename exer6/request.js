import needle from 'needle';


//add student
needle.post(
    'http://localhost:3000/save-student',
    {
        stdnum: "2024-00001",
        fname: "Mary Jane",
        lname: "Watson",
        age: 18
    },
    (err, res) => {
        console.log(res.body);
    }
);

needle.post(
    'http://localhost:3000/save-student',
    {
        stdnum: "2024-00002",
        fname: "Norman",
        lname: "Osborn",
        age: 19
    },
    (err, res) => {
        console.log(res.body);
    }
);

needle.post(
    'http://localhost:3000/save-student',
    {
        stdnum: "2024-00003",
        fname: "May",
        lname: "Parker",
        age: 20
    },
    (err, res) => {
        console.log(res.body);
    }
);

needle.post(
    'http://localhost:3000/save-student',
    {
        stdnum: "2024-00004",
        fname: "Curt",
        lname: "Connors",
        age: 19
    },
    (err, res) => {
        console.log(res.body);
    }
);

needle.post(
    'http://localhost:3000/save-student',
    {
        stdnum: "8051495845",
        fname: "Peter",
        lname: "Parker",
        age: 21
    },
    (err, res) => {
        console.log(res.body);
    }
);


// //update student
// needle.post(
//     'http://localhost:3000/update',
//     {
//         fname: "Mary Jane"
//     },
//     (err, res) => {
//         console.log(res.body);
//     }
// );

// //delete one student
// needle.post(
//     'http://localhost:3000/remove-user',
//     {
//         stdnum: "8051495845"
//     },
//     (err, res) => {
//         console.log(res.body);
//     }
// );

// //delete all student
// needle.post(
//     'http://localhost:3000/remove-all-user',
//     { },
//     (err, res) => {
//         console.log(res.body);
//     }
// );

//search student
needle.get(
    'http://localhost:3000/user?stdnum=8051495845', 
    (err, res) => {
    console.log(res.body);
});