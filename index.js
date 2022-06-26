const express = require('express')
const studentData = require('./studentResults.json')

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

let students = [];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Problem 1
app.get('/getList', (req, res) => {
  res.send(studentData)
})

// Problem 2
app.get('/getstudents', (req, res) => {
  res.send(students)
})

app.post('/addStudentsdetails', (req, res) => {
  const stud = req.body;
  students.push(stud)
  res.send('Success');
})


app.listen(port, () => {
  console.log('app is listening to port 3000')
})