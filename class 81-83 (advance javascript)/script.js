console.log(a1);
var a1 = 6;


async function main(){ 
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b);
};


const sleep = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}


main()


