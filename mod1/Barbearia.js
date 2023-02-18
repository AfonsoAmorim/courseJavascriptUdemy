class Funcionario{
    constructor(nome,idade,rA){
        this.nome=nome;
        this.idade=idade;
        this.rA=rA;
    }
    somarComissao(comissao){
        let comissaoFinal = comissao+(comissao*0.1); 
        return comissaoFinal;
    }
}

let func = new Funcionario("Denis",22,1001);
console.log(func);
console.log(func.somarComissao(1000));


