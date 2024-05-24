import needle from 'needle';

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

// needle.post(
//     'http://localhost:3000/update',
//     {
//         fname: "Mary Jane"
//     },
//     (err, res) => {
//         console.log(res.body);
//     }
// );