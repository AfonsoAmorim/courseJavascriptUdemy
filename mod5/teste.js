//teste de arrays e functions

const gorjeta = (valorDaGorjeta) => {
    if (valorDaGorjeta >= 50 && valorDaGorjeta <= 100) {
        return `O valor da gorjeta é ${valorDaGorjeta * (15 / 100)}`
    } else {
        return `O valor da gorjeta é ${valorDaGorjeta * (20 / 100)}`
    }
}
console.log(gorjeta(50));
console.log(gorjeta(100));

const values = [125, 55, 44];
const bills = [gorjeta(125), gorjeta(555), gorjeta(44)];

const tips = [bills[0], bills[1], bills[2]];
console.log("O valor com Arrays Bills é: ", tips);





