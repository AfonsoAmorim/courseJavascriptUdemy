function dormirAgora(horas){
    if(horas > 23){
        console.log("Vamos dormir!");
    }else{
        console.log("Continue codando! rsrsrs");
    }
};
dormirAgora(10);

class jovemSP{
    constructor(nome,idade,rG){
        this.nome = nome;
        this.idade = idade;
        this.rG = rG;
    }

}

let joao = new jovemSP("João de Deus",22,5545314152.655);
console.log(joao);

