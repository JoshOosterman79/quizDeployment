const mongoose = require('mongoose');

const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();

/**
 * Joshua Oosterman
 * SN: 300302076
 */



const port = process.env.PORT || 3000;

// Create a Schema object
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  myName : String,
  mySID: Number,
});

// This is a function that uses .create that would create me a single entry in the collection,
// for whatever reason when I try to run .findMany() i drew a callback error
// I used this function as well in the lab, founded on: https://mongoosejs.com/docs/models.html

const addStudent = async () => {
  try {
    await Student.create ([
      {myName: "Joshua Oosterman", mySID: 300302076},
    ]);
  } catch (err) {
    console.error("Error: ", err);
  }

  }


// Create a Model object
const Student = mongoose.model("s24students", StudentSchema);


// This is the function call, I only call it once to add whatever data I need, then uncomment after
 addStudent();

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/form.html")
});

app.post('/', async (req, res) => {

  const myuri = req.body.myuri

  mongoose.connect(myuri, {
  useNewUrlParser: true,
  useUnifiedTopology: true

});

  // send a response to the user
  res.send(`<h1>Document  Added</h1>`);
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
