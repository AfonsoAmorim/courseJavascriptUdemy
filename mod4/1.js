//functions 
function nomeUser(){
    console.log("My name is Jonas");
}
function soma(a,b){
    return a+b
}

nomeUser();
console.log(soma(4,5));
//-------------------------
//function declaration
function calcAge(niver){
    return 2037-niver;
}
console.log(calcAge(1998));

//function expression 
let calAge2 = function (age) {
    return 2037-age;
} 
let age2 = calAge2(1990);
console.log(age2);
//arrow functions
const aniver = ano => 2037-ano;
console.log("Arrow function exemplo 001 >> ",aniver(1991));

const anosAposentar = anoNiver => {
    const age = 2037-anoNiver;
    const aposentar = 65-age;
    return aposentar;
}
console.log("Exemplo Arrow Functions 002 >> ",anosAposentar(1992));
const subtracao = (numeroUm,numerodois)=>{
    return numeroUm-numerodois;
}
console.log("Arrow function 003 >> ",subtracao(200,102));
//--------------------------------
//function calling other function
function pedacosFrutas(fruta){
    return fruta * 4;
}
function processarFruta(apples,oranges){
    const applePieces = pedacosFrutas(apples);
    const orangesPieces = pedacosFrutas(oranges);
    const suco = `Suco com ${applePieces} e ${orangesPieces}.Realizar pedido!`
    return suco;
}
console.log(processarFruta(2,3));