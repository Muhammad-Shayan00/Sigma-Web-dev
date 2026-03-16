// let btn=document.getElementById("btn")

// btn.addEventListener("click",()=>{
//     document.querySelector(".box").innerHTML="<b>button has been clicked<b>"
// })

// btn.addEventListener("contextmenu",()=>{
//     alert("button has been clicked")
// })

// document.addEventListener("keydown",(e)=>{
//     console.log(e,e.key,e.keyCode)
// })

//eventbubbling
let gc=document.getElementsByClassName("grandcontainer")[0]
gc.addEventListener("click",()=>{
    alert("grandcontainer has been clicked")
})

let c=document.getElementsByClassName("container")[1]
c.addEventListener("click",(e)=>{
    alert("container has been clicked")
    e.stopPropagation()// to stop the bubbling effect
})

let cc=document.getElementsByClassName("childcontainer")[0]
cc.addEventListener("click",()=>{
    alert("childcontainer has been clicked")
})


//time 



setTimeout(() => {
    document.querySelector(".childcontainer").style.background = "blue";
}, 2000);//time  is in millisecond




//examplecode for cotinue changes after some time

// let a = setInterval(() => {
        //     document.querySelector(".childContainer").style.background = getRandomColor();
        // }, 1000);