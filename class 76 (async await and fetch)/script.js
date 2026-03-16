async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(455)
        },3500)
        
    })
    
}

async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = x.json()
    return data
    
}


async function main() {
    console.log("Loading module")
    console.log("loging data....")
    let data= await getdata()

    console.log("data has beet loading sucessfully afte 3.5 second")
    console.log("done")


}


main()