// console.log("helo world")

// let a=prompt("Enter first number")
// let b=prompt("Enter second number")

// let sum= a+b
// if (isNaN(a) || isNaN(b)) {
//     throw SyntaxError("Sorry this is not allowed")
// }// to throw the error
// console.log("the sum of numbers is" + sum)


//to handle the error

// console.log("the sum of numbers is" + x*2)//here x is not defined so it throw the error

//Solution

try {
    console.log("the sum of numbers is" + x*2)
    
} catch (error) {
    console.log("Error aa gia bhai shahab")
    
}



// for understand the finally

function main() {
    let x=7

    try {
    console.log("the sum of numbers is" + x*2)
    return true
    
} catch (error) {
    console.log("Error aa gia bhai shahab")
    return false
}
finally{
    console.log("finally is execute everytime wheater function returns before")

}
    
}

main()


