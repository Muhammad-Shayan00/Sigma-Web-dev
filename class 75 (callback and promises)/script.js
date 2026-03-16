//CALLBACK FUNCTION

console.log("CallBack Function")
//callback means calling the function in hte function


const callback=(name)=>{
    console.log("callback function has been called by " + name)
}

const loadscript=(scr,callback)=>{
    let sc=document.createElement("script")
    sc.src=scr
    sc.onload=()=>callback("shayan")
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)



//PROMISES


//A Promise in JavaScript is basically something that represents a task that will finish in the future, not right now.


let myprom = new Promise((resolve, reject) => {
    
    let sucess=false

    if (sucess) {
        resolve("Task completed sucessfully")
    } 
    else {
        reject("task is not completed sucessfully")
        
    }


})

myprom.then((message)=>{
    console.log(message)

})
myprom.catch((message)=>{
    console.log(message)

})
