const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
// Middleware = functions that execute before sending the response


app.use(express.static("public"))

//middleware 1

const middelware1 = function (req, res, next) {
    console.log(req.headers)
    console.log('middeleware 1')
    req.shayan=23
    fs.appendFileSync("public/name.txt", "\n\n hy ")
    fs.appendFileSync("public/name.txt", `${Date.now()} is a ${req.method}`)
    console.log(`${Date.now()} is a ${req.method}`)
    
    next()// use to move on the next part of the code otherwise the request cycle will end
}
app.use(middelware1)


//middleware 2

const middelware2 = function (req, res, next) {
    console.log('middeleware 2')
    //   res.send("hacked by middleware 2") this will also stop the process
    next()// use to move on the next part of the code otherwise the request cycle will end
}
app.use(middelware2)

// middleware can be use direct function declaration 

// Study type of  middlieware by ourselve

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello World! about ' + req.shayan)
})
app.get('/contact', (req, res) => {
    res.send('Hello World! contact')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
