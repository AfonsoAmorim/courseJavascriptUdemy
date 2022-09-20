//teste 03 

const mediaDolphins = (numberA, numberB, numberC) => {
    return (numberA + numberB + numberC) / 3
}

const mediaKoalas = (numberA, numberB, numberC) => {
    return (numberA + numberB + numberC) / 3
}


let mediaTimeOne = mediaDolphins(9600, 108, 89).toFixed(2);
let mediaTimeDois = mediaKoalas(88, 91, 110).toFixed(2);
let scoreMinimo = 100;

const resultFinal = () => {
    if (mediaTimeOne > mediaTimeDois) {
        return `O vencedor é o Time Dolphins com ${mediaTimeOne} pontos`
    }else if(mediaTimeOne < mediaTimeDois){
        return `O vencedor é o Time Koalas com ${mediaTimeDois} pontos`
    }else{
        return `O jogo ficou empatado!!`
    }
}
console.log(resultFinal());


