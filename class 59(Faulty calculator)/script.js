console.log("FAULTY CALCULATOR")

//this calcultor gives 10% wrong answer and 90% correct answer

let prob=Math.random();
console.log(prob)

let num1=Number(prompt("Enter your first number:"))
let num2=Number(prompt("Enter your Second number:"))
let operator = prompt("Enter your operator(+ or -):")

if(prob<0.1){

    if(operator=="+"){
        console.log("The sum of number 1 and number 2 is "+ (num1-num2))
    }
    else if(operator=="-"){
        console.log("The difference of number 1 and number 2 is "+ (num1+num2))
    }
    else{
        console.log("invalid input")
    }
    
    
}
else{
    if(operator=="+"){
        console.log("The sum of number 1 and number 2 is "+ (num1+num2))
    }
    else if(operator=="-"){
        console.log("The difference of number 1 and number 2 is "+ (num1-num2))
    }
    else{
        console.log("invalid input")
    }

}