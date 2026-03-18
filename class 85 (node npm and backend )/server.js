//to check that node and npm install check node --version and npm --version

console.log("hy")

// to run the code write node .\server.js

//write npm init to make the npm pacakage

// write npm install pakage_name for install the package it will make a new folder called node_modules

// even with after delete the node module just type npm install and all node module will automatically install with the help of reading dependencies

var slugify=require('slugify')
const a = slugify(" some string")//convert in url friendly
console.log(a)

const b = slugify('dn  ffo  f', '_')
console.log(b)

const c = slugify('dn  $&$)*$ #*$ffo  f', '_')
console.log(c)


