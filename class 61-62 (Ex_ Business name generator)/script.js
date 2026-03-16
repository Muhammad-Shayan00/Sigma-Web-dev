let adjective_number=(Math.random())*10;
// console.log(adjective_number)
let shopname_number=(Math.random())*10;
// console.log(shopname_number)
let word_number=(Math.random())*10;
// console.log(word_number)

function adjective(adjective_number){
    if(adjective_number<3){
        return "crazy";
    }
    else if(adjective_number<6){
         return "amazing";
    }
    else{
         return "fire";
    }
}

function shopname(shopname_number){
    if(shopname_number<3){
         return "engine";
    }
    else if(shopname_number<6){
         return "food";
    }
    else{
         return "garment";
    }
}

function word(word_number){
    if(word_number<3){
         return "bros";
    }
    else if(word_number<6){
         return "limited";
    }
    else{
         return "hub";
    }
}

let business_name=adjective(adjective_number)+" "+shopname(shopname_number)+" "+word(word_number)
console.log(business_name)


