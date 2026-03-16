console.log("Hello World")

let a=1;

//For Loop

for (let i = 0; i < 20; i++) {
    console.log(i+a)
    
}

let obj={
    name:"Shayan",
    age:18,
    company:"Synteks"
}

//for in loop

for (const key in obj) {
    
    const element = obj[key];
    console.log(key,element);
    
}
 
//for of loop

for (const i of "shayan") {
    console.log(i)
    
}

//While Loop

let x=10;

while (x<20) {
    console.log(x);
    x++;
    
}

//Do While Loop
let y=9;
do {
    console.log(y);
    y++;

    
} while (y<13);