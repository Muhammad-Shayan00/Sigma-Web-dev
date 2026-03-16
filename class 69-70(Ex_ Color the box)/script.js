console.log("hy")

let num1=Math.random()
let num2=Math.random()
let num3=Math.random()
let num4=Math.random()
let num5=Math.random()

function color(num) {
    if(num<0.2){
        return "green"
    }
    else if (num<0.4) {
        return "red"  
    } 
    else if (num<0.6) {
        return "blue"
    }
    else if (num<0.8) {
        return "yellow"
    }
    else {
        return "black"
    }
    
}

let boxes=document.getElementsByClassName("box")

boxes[0].style.backgroundColor=color(num1)
boxes[1].style.backgroundColor=color(num2)
boxes[2].style.backgroundColor=color(num3)
boxes[3].style.backgroundColor=color(num4)
boxes[4].style.backgroundColor=color(num5)