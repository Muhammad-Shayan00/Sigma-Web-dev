console.log("hy")

import mongoose from 'mongoose';
import express from "express";
import { Employee } from "./models/companydatabase.js"

// create the database manually and add one document
let conn = await mongoose.connect("mongodb://127.0.0.1:27017/companydatabase")
const app = express()
const port = 3000

app.get('/generate', async (req, res) => {

    await Employee.deleteMany({});
    for (let i = 0; i < 10; i++) {
        let arrayofname = ["Shayan", "abdullah", "mushtaq", "aaliyan", "shaheer", "hasssan"]
        let arrayofsalary = [10000, 55400, 48884, 293903, 3949340]
        let arrayoflanguage = ["phthon", "java", "C++", "ruby"]
        let arrayofisManager = [true, false]

        const employee = new Employee({
            name: arrayofname[Math.floor(Math.random() * arrayofname.length)],
            salary: arrayofsalary[Math.floor(Math.random() * arrayofsalary.length)],
            language: arrayoflanguage[Math.floor(Math.random() * arrayoflanguage.length)],
            isManager: arrayofisManager[Math.floor(Math.random() * arrayofisManager.length)]
        });

        await employee.save();
        console.log("Inserted:", employee);
    }
    res.send("Data Generated");
})


app.use(express.static('public')); // place your index.html + script.js in /public

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})














