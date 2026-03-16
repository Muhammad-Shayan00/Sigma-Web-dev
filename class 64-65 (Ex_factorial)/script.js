console.log("hy")

let a=6;

function factorial(num) {
let ans=1;
    for (let index = 1; index < (num+1); index++) {
        ans=ans*index;
    }
    return ans;    
}

console.log(factorial(a))