const express = require('express')
const app = express()
const port = 3000


// Types of request

// | Method | Purpose     | Example Action   |
// | ------ | ----------- | ---------------- |
// | GET    | Read data   | Get users        |
// | POST   | Create data | Add new user     |
// | PUT    | Update data | Update user info |
// | DELETE | Delete data | Remove user      |

// GET REQUEST
app.get('/', (req, res) => {
    res.send('Hello World get')
    console.log("hy this is the get request")
})

// POST REQUEST

app.post('/', (req, res) => {
    res.send('Hello World post')
    console.log("hy this is the post request")
})
//to test the post request manualy
app.use(express.static("public"))
// now create html file in public folder and write function there


//PUT REQUEST

app.put('/', (req, res) => {
    res.send('Hello World put')
    console.log("hy this is the put request")
})


// chaining requests in express


app.get('/', (req, res) => {
    res.send('Hello World get')
    console.log("hy this is the get request")
}).put('/', (req, res) => {
    res.send('Hello World put')
    console.log("hy this is the put request")
}).post('/', (req, res) => {
    res.send('Hello World post')
    console.log("hy this is the post request")
})


//Serving html file

app.get('/htmlfile', (req, res) => {
    console.log("servning html file")
    res.sendFile('templates/index1.html',{root:__dirname})
})// url ---> http://localhost:3000/htmlfile



//request on json file

app.get('/api', (req, res) => {
    res.json({a:1,b:2,c:3, name:["shayan","abdullah","Mushtaq"]})
}) // url ----> http://localhost:3000/api

// for all type of response visit responce methord png in the same file



// now setup postman enviornment


// routing

const content1 = require('./router')

app.use('/blog', content1)

// now url :

// http://localhost:3000/blog
// http://localhost:3000/blog/about
// http://localhost:3000/blog/dfdfadsf















app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
