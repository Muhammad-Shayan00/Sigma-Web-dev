console.log(document.querySelector(".box"))
console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".box").innerText)
console.log(document.querySelector(".container").innerText)
console.log(document.querySelector(".container").outerHTML)//also container will be included

console.log(document.querySelector(".container").tagName)
console.log(document.querySelector(".container").nodeName)

console.log(document.querySelector(".container").textContent)
// console.log(document.querySelector(".container").hidden)
// console.log(document.querySelector(".container").hidden=true) make it unvisible

console.log(document.querySelector(".box").innerHTML="i am box 2")

console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
document.querySelector(".box").setAttribute("style","display:inline")
console.log(document.querySelector(".box").getAttribute("style"))
console.log(document.querySelector(".box").attributes)
console.log("hy")
document.querySelector(".box").removeAttribute("style")
console.log(document.querySelector(".box").attributes)
console.log(document.querySelector(".box").dataset)


let div =  document.createElement("div")
div.innerHTML = "i have been created"
div.setAttribute("class","created")
// document.querySelector(".container").append(div)
document.querySelector(".container").prepend(div)

document.querySelector(".container").insertAdjacentHTML("afterend","<b> i am inserted </b>")

console.log(document.querySelector(".container").classList)

console.log(document.querySelector(".container").className)

// document.querySelector(".container").classList.add("new_class")

document.querySelector(".container").classList.toggle("new_class")
console.log("hy")
console.log(document.querySelector(".container").className)















