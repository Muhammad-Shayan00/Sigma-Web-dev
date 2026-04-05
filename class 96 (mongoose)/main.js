console.log("hy")

import mongoose from 'mongoose';
import express from "express";
import {Todo} from "./models/Todo.js"

// create the database manually and add one document
let conn = await mongoose.connect("mongodb://127.0.0.1:27017/todoApp")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo(
        {
        title: "shayan",
        desc: "shayan is a good boy",
        isDone: true
        }
    )
    todo.save()
  res.send('Hello World!')
  console.log ("data inserted")
})



app.get('/a',  async (req, res) => {
    let todo = await Todo.findOne({})

  res.json({title: todo.title})
})


// now type this in the url http://localhost:3000/a 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



