//check callstack in sources developer tool
function wakeUp(){
    shower();
    eatBreakfast();
    console.log('ready to work')
}

function shower(){
    console.log('having a shower')
}

function eatBreakfast(){
    let meal=cookFood()
    return `eating ${meal}`
}

function cookFood(){
    let foods=['chicken','egg','oatmeal']
    return foods[Math.floor(Math.random() * (foods.length - 1))]
}

