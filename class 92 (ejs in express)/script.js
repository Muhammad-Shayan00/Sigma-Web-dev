// console.log ("hello world")

// // how to use bootstrap with express
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.sendFile("view/index.html",{root:__dirname})
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });


// HOW TO USE EJS

const express = require("express");
const app = express();

// step 1 : include this:
app.set('view engine', 'ejs')

//send dynamic data
app.get("/", (req, res) => {
    let brandname="addidas";
    let description ="this is a very good brand"
    let array1=["hy",22,33]
  res.render("index",{sitename:brandname, about:description,array1})
});

//create dynamic blog pages using ejs

const blogs = [
    {
        title: "My First Blog",
        key: "myfirstblog",
        author: "Ali",
        content: "This is the content of my first blog."
    },
    {
        title: "My Second Blog",
        key: "mysecondblog",
        author: "Sara",
        content: "This is some interesting content for the second blog."
    },
    {
        title: "Travel Blog",
        key: "travelblog",
        author: "Ahmed",
        content: "I love traveling and sharing my experiences."
    }
];

// Dynamic route for individual blog
app.get("/:slug", (req, res) => {  
    const slug = req.params.slug;  // slug come whats return after / in url
    const blog = blogs.find(element => element.key === slug);

    if(blog){
        res.render("blogfile", { blog });
    } else {
        res.send("Blog not found 😢");
    }
});

//now type   http://localhost:3000/myfirstblog




app.listen(3000, () => {
  console.log("Server running on port 3000");
});



