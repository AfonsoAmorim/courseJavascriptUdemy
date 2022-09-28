//teste 

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let x = 0; x < bills.length; x++) {
    const tip = calcTip(bills[x]);
    tips.push(tip);
    totals.push(tip + bills[x]);
}
console.log(tips);
console.log(totals);
console.log(bills);

//bonus 

const calTwo = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calTwo([2,3,6]));
console.log(calTwo(totals));
console.log(calTwo(tips));



