//teste 

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calImc: function () {
        const imc = this.mass /  this.height **2;
        return imc.toFixed(2)
    }
};

const john = {
    fullName: 'John Smiths',
    mass: 92,
    height: 1.95,

    calImc: function () {
        const imc = this.mass / this.height**2;
        return imc.toFixed(2)
    }
};
const resultMark = console.log(mark.calImc());
const resultJohn = console.log(john.calImc());

const testeMaiorImc = () =>{
    if (resultJohn > resultJohn) {
        return `${mark.fullName} tem ${mark.mass} de peso e ${mark.height} de altura. ${john.fullName} tem ${john.mass} e ${john.height}.`
    }else{
        return `${john.fullName} tem ${john.mass} de peso e ${john.height} de altura. ${mark.fullName} tem ${mark.mass} e ${mark.height}.`
    }
}
console.log(testeMaiorImc());