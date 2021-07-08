function soma(a,b){
    return console.log(a+b);
}

function sub(a,b){
    return console.log(a-b);
}

const objMath = {
    funcSoma:soma,
    funcSub:sub
}

module.exports = objMath;