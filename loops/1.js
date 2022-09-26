//loops 
const loopsFor = "Loop FOR"
for (let repetir = 0; repetir <= 10; repetir++) {
    console.log(loopsFor + ' ' + repetir);
}

//loops with arrays, objects 

const pessoa = [
    'jonas',
    'Gomez',
    2037 - 1998,
    'medico',
    ['michale', 'joao', 'carlos']
];

const types = [];

for (let i = 0; i <= pessoa.length; i++) {
    console.log(pessoa[i], typeof pessoa[i]);

    //types[i] = typeof pessoa[i];
    types.push(typeof pessoa[i]);

}
console.log(types);
//teste two

const years = [1997,1990,2000,1960];
const ages = [];
for(i=0;i < years.length;i++){
    ages.push(2037-years[i]);
}
console.log("Incluindo dados em um novo array ",ages);


