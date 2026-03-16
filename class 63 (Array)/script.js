console.log("Array")

let arr1=[1,2,3,4,5,6,7,8]
console.log(arr1,typeof(arr1))
arr1[2]=33
console.log(arr1)

arr2=arr1.toString()
console.log(arr2)

arr1=arr1.join(" and ")
console.log(arr1)

let arr3=[2,4,6,8,10]
// arr4=arr3.splice(2,3)

console.log("aaaa")
arr3.splice(1,2,333,5555)//start with index 1 remove 2 element and add 333 and 5555
console.log(arr3)


//ARRAY IN LOOP

let arrodd=[1,3,5,7,9,11,13,15]

for (let index = 0; index < arrodd.length; index++) {
    const element = arrodd[index];
    console.log(element)
}
    
arrodd.forEach(element => {
    console.log(element)
    
})

let arrobj={
    a:1,b:2,c:3
}

for (const key in arrobj) {
    const element = arrobj[key];
    console.log(key,element)
    
}


let arr5=[33,44,55,66,77,88,]

let arr6=[]

arr6=arr5.map((element)=>{
    return element*2
})

console.log(arr6)




