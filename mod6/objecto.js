const pessoa = {
    firstName: 'Jonas',
    lastName: 'Menezes',
    age: 2037-1997,
    job: 'Teacher',
    friends: ['Michael','Peter', 'Maria']
};
const nome = pessoa.firstName;
console.log(nome);
console.log(pessoa);

pessoa.location = 'Portugal';
pessoa['twitter'] = '@jonas10';
console.log(pessoa);

// const askJonas = prompt('O que você quer saber sobre o Jonas? ');
// console.log(pessoa[askJonas]);

//teste - "Jonas tem 3 amigos, e seu melhor amigo é Michael"

const testeJonas = pessoa.friends;
const testeJonas2 = pessoa.friends[0];
console.log("Jonas tem 3 amigos " + testeJonas + " e seu melhor amigo é: " + testeJonas2);

