//teste 02 if and else 
const alunoSolimeo = 10;
const alunoJacomo = 5;

const testenota = () => {
    if (alunoJacomo > alunoSolimeo) {
        return `A nota do aluno do Jacomo é: ${alunoJacomo}, sendo assim é maior que ${alunoSolimeo} do 2° aluno.`
    } else {
        return `A nota do aluno do Solimeo é: ${alunoSolimeo}, sendo assim é maior que ${alunoJacomo} do 2° aluno.`
    }
}
console.log(testenota());

