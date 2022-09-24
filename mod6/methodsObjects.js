const jonas = {
    nome: 'Jonas',
    anoDeNascimento: 1987,
    cnh: true,

    // calAge: function(niver){
    //     return 2037 - niver;
    // }
    calAge2: function(){
        return 2037 - this.anoDeNascimento;
    },

    teste: function() {
        return `${this.nome} is a ${this.calAge2()}-years old, e he has ${this.cnh ? 'a' : 'no'}  cnh.`
    }

};
// console.log(jonas['calAge2'](1987));
console.log(jonas.calAge2());

//teste - Jonas tem 50 anos e é professor, e tem ou não cnh


console.log(`${jonas.nome} tem ${jonas.calAge2()}, e ${jonas.cnh}`);

console.log(jonas.teste());