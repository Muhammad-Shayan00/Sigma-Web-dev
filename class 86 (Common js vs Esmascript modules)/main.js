// install nodemon package so that server load automatically whenever something change by writing the command npm install -g nodemon 
// here -g means globally which install in whole comouter so now not need to install next time just use
// check version nodemon --v





// way to write on common js santex

const http = require('node:http'); 

//for using ES6 first change "type": "module", in pakage.json 

// import http from "http"

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) =>  {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1> Hello Wdfdforll   clskld </h1>');    
});

server.listen(port, hostname, () => {
  console.log(`Server running at  http://${hostname}:${port}/`); 
}); 


// // named export in ES6
// import {a} from "./mymodules.js"
// console.log(a)

// default export in ES6
// import obj from "./mymodules.js"
// console.log(obj,__dirname,__filename)


const a = require("./mymodule2.js")
console.log(a,__dirname, __filename) // this is only work in common js and flie name and dor name is print without declaration because node automatically wrap it in a function that print it


