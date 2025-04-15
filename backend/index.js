const express = require('express');
const app = express();
// console.log(app);
const mongoDB = require('mongoose'); 
const cors = require('cors');
app.use(cors());
app.use(express.json());

// app.get('/', (req,res)=>{
//     res.send("Hello World!");
// })

const schema = new mongoDB.Schema({
    name : String,
    age : Number,
    id: Number,
    course: String,
})

const studentSchema = mongoDB.model('Student',schema);


app.get('/',async (req,res)=>{
    let students = await studentSchema.find({});
    res.send(students);
})

app.post('/add', (req, res) => {
    const { name, age, id, course } = req.body;

    const student = new studentSchema({
        name,
        age,
        id,
        course
    });

    student.save()
        .then(() => res.status(201).send('Student added successfully'))
        .catch(err => res.status(500).send('Error saving student: ' + err));
});


app.put('/update/:id', async (req, res) => {
    try {
        const updatedStudent = await studentSchema.findByIdAndUpdate(
            req.params.id,       // ID from URL
            req.body,            // Updated data
            { new: true }        // Return the updated document
        );

        if (!updatedStudent) {
            return res.status(404).send('Student not found');
        }

        res.send(updatedStudent);
    } catch (err) {
        res.status(500).send('Error updating student: ' + err);
    }
});



app.delete('/delete/:id', async (req, res) => {
    try {
        const deletedStudent = await studentSchema.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).send('Student not found');
        }

        res.send('Student deleted successfully');
    } catch (err) {
        res.status(500).send('Error deleting student: ' + err);
    }
});





mongoDB.connect("mongodb://localhost:27017/student").then(()=>{
    console.log("Connection Successful");
}).catch((err) => {console.log(err)});


app.listen(5001, () => {
    console.log("Server is running on port 3001");
})


