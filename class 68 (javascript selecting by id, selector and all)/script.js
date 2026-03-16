let boxes=document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor="green"

document.getElementById("redbox").style.backgroundColor="red"

document.querySelector(".box").style.backgroundColor="red"//onlu apply on first element

console.log(document.querySelectorAll(".box"))//return list of html

document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor="yellow"
    
});

e=document.getElementsByTagName("div")

if (e[4]="redbox") {
    console.log("true") 
}
else{
    console.log("false")
}

