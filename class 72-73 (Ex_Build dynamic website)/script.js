function createcard(title,text,imagelink){
    let html=`<div class="card">
            <img src="${imagelink}" alt="">
            <div class="textbox">
                <div class=title>${title}</div>
                <div class=text>${text}</div>
            </div>
        </div>`

document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}


//no wpaste this on console and it will automatically generate your card
createcard("title of second video","30M views . 2 years ago","https://i.ytimg.com/vi/Lt0iZi50Vpw/hqdefault.jpg",)