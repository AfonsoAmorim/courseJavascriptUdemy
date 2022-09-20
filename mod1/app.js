//teste 01


let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

const markHighrImc = true;

function imcUdemyMark(markMass,markHeight){
    return markMass/markHeight**2;
}
const resultmark = imcUdemyMark(markMass,markHeight);

function imcUdemyJohn(johnMass,johnHeight){
    return johnMass/johnHeight**2;
}
const resultImcJohn = imcUdemyJohn(johnMass,johnHeight);


if (resultmark > resultImcJohn) {
    console.log(`Mark weights ${markMass} kg and is ${markHeight}.
    John weights ${johnMass}kg and is ${johnHeight} m tall`);
}else{
    console.log(`Mark weights ${markMass} kg and is ${markHeight}.
    John weights ${johnMass}kg and is ${johnHeight} m tall`);
}

