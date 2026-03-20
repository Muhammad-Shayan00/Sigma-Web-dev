console.log("hello world")

// to install express write node install express
// create server using express


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Wor!')
})
app.get('/about', (req, res) => {
  res.send('Hello about')
})// now paste this on browser http://127.0.0.1:3000/about

app.get('/contact', (req, res) => {
  res.send('Hello contact')
})// now paste this on browser http://127.0.0.1:3000/about

app.get('/blog', (req, res) => {
  res.send('Hello blog')
})// now paste this on browser http://127.0.0.1:3000/about

app.get('/blog/introtoshayan', (req, res) => {
    //logic to fetch data from database
  res.send('here is the intro to shayan')
})// now paste this on browser http://127.0.0.1:3000/blog/introtoshayan




app.get('/blog/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`)
})// whatever we type in the slug palce in the url is will act as variable


app.get('/blog/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`)
  console.log(req.params)
  console.log(req.query)
})// if we type this http://127.0.0.1:3000/blog/introtoshayanssd?slkfjskljfkl;asjfo
//whaterver before ? is slug and whatever after ? is query (both use for different cases)





// parameters

app.use(express.static('public'))
// to acees the fie securily make a folder public the add that fiel in it to check write 
// http://127.0.0.1:3000/abc.txt



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
