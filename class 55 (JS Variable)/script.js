console.log("hello world")

var a=5;
var b=6;

console.log("the answer is "+ (a+b))

console.log(typeof a)


// good practice : use let in place of var because it is block variable

let f=7;
let c=3.55;
const isTrue=true;
let d=undefined;
let e=null;

console.log(c, d, e, f, isTrue)
console.log(typeof c, typeof isTrue, typeof d, typeof e, typeof f,)


//object

let o={
    "name":"Shayan",
    "age":20,
    "isHandsome":true
}

console.log(o["name"]);
console.log(o);
o.age=21;
console.log(o);