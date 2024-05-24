import mongoose from 'mongoose';

await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase", {
    useNewUrlParser: true, useUnifiedTopology: true
});

const homepage = (req,res) => {
    res.send("Welcome to the Homepage (Exercise 6")
};

const Student = mongoose.model('Student', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
}, "studentData");

const saveStudent = async (req, res) => {
    const newStudent = new Student({
        stdnum: req.body.stdnum, 
        fname: req.body.fname, 
        lname: req.body.lname, 
        age: req.body.age
    });

    let findOneStudent = await Student.findOne({stdnum: req.body.stdnum});
    console.log(findOneStudent);
    if (findOneStudent === null){
        await newStudent.save()
        res.send({inserted: true});
    } else {
        console.log("Student Already Exist");
        res.send({inserted: false});
    }
};

const updateStudent = async (req, res) => {
    res.send("Update Student Post")
};

const removeUser = async (req, res) => {
    res.send("Remove User Post")
};

const removeAllUser = async (req, res) => {
    res.send("Remove All User Post")
};

const searchUser = async (req, res) => {
    res.send("Search User Get")
};

const showAllUser = async (req, res) => {
    res.send("Show All USer Get")
};

export { homepage, saveStudent, updateStudent, removeUser, removeAllUser, searchUser, showAllUser };