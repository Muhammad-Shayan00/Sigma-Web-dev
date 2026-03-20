
// file module
//(File System) module is already built into Node.js
//fs → File system operations

// http → Create servers
// path → Handle file paths
// os → System info
// events → Event handling


// const { error } = require("console")
// const fs = require("fs")
// console.log(fs)

// console.log("starting")
// fs.writeFileSync("shayan.txt","i am shayan") // this function will stop the program (not recommanded)
// console.log("ending")

// console.log("starting")

// fs.writeFile("shayan1.txt","i am shayan 232",()=>{
//     console.log ("done")

// }) // this function will not stop the program (recommanded (async))
// console.log("ending") 

// To append text in the file that have excisting text

// fs.appendFile("shayan1.txt", "Who am i", () => { })

//writefile function clear the previous text and then add new

// fs.writeFile("shayan1.txt", "i am shayan on", (err) => {
//     if (err) throw err;
//     console.log("done")
//     fs.readFile("fileforread.txt", (err, data) => {
//         console.log(err, data.toString())
//     }
//     )

// })  //so this is the callback hell here 


//Extreme Example of callback hell


// fs.writeFile("shayan1.txt", "i am shayan on", (err) => {
//     if (err) throw err;
//     console.log("done")
//     fs.readFile("fileforread.txt", (err, data) => {
//         console.log(err, data.toString())
//         fs.writeFile("shayan1.txt", "i am shayan on", (err) => {
//             if (err) throw err;
//             console.log("done")
//             fs.readFile("fileforread.txt", (err, data) => {
//                 console.log(err, data.toString())
//                 fs.writeFile("shayan1.txt", "i am shayan on", (err) => {
//                     if (err) throw err;
//                     console.log("done")
//                     fs.readFile("fileforread.txt", (err, data) => {
//                         console.log(err, data.toString())
//                         fs.writeFile("shayan1.txt", "i am shayan on", (err) => {
//                             if (err) throw err;
//                             console.log("done")
//                             fs.readFile("fileforread.txt", (err, data) => {
//                                 console.log(err, data.toString())
//                                 fs.writeFile("shayan1.txt", "i am shayan on", (err) => {
//                                     if (err) throw err;
//                                     console.log("done")
//                                     fs.readFile("fileforread.txt", (err, data) => {
//                                         console.log(err, data.toString())

//                                     }
//                                     )

//                                 })

//                             }
//                             )

//                         })

//                     }
//                     )

//                 })

//             }
//             )

//         })

//     }
//     )

// })

// to avoid callback hell we use promosis


// now see fs/promises in ES6 Modules

// import fs from "fs/promises";


// try {
//     let a = await fs.readFile("shayan.txt");
//     console.log(a.toString());
// } catch (err) {
//     console.log("Error reading file:", err.message);
// }