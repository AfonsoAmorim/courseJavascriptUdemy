//teste 04

function calcularGorjeta(conta){
    if (conta >= 50 && conta <= 100) {
        return conta * 0.15;
    } else {
        return conta * 0.2;       
    }
}



let gorjetaUm = calcularGorjeta(275);
console.log("O valor inical é R$ 275,00 " + " sendo assim a gorjeta é " +calcularGorjeta(275) + ", o valor final da conta é : R$ " + (gorjetaUm+275));

let gorjetaDois = calcularGorjeta(40);
console.log("O valor inical é R$ 40,00 " + " sendo assim a gorjeta é " +calcularGorjeta(40) + ", o valor final da conta é : R$ " + (gorjetaDois+40));

let gorjetaTres = calcularGorjeta(430);
console.log("O valor inical é R$ 430,00 " + " sendo assim a gorjeta é " +calcularGorjeta(430) + ", o valor final da conta é : R$ " + (gorjetaTres+430));