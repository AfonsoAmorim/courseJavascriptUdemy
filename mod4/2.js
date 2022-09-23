//teste 05
const calMedia = (x, y, z) => {
    return (x+ y+ z) / 3;
}
const mediaDolphins = calMedia(44, 23, 71);
const mediaKoalas = calMedia(65, 54, 49);
console.log("Medias 001 >> ", mediaDolphins, mediaKoalas);

const checarVencedor = () => {
    if (mediaDolphins >= (2*mediaKoalas)) {
        return `Dolphins ganhou de ${mediaDolphins} por ${mediaKoalas}`
    } else if (mediaKoalas >= (2*mediaDolphins)) {
        return `Koalas ganhou de ${mediaKoalas} por ${mediaDolphins}`
    }else{
        return "Ninguém ganhou pois o valor não é superior ao dobro do outro concorrente!"
    }
}
console.log(checarVencedor());


