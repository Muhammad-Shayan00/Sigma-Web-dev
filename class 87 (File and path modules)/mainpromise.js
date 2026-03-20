import fs from "fs/promises";

let a = fs.readFile("shayan.txt")

try {
    let a = await fs.readFile("shayan.txt");
    console.log(a.toString());
} catch (err) {
    console.log("Error reading file:", err.message); 
} 