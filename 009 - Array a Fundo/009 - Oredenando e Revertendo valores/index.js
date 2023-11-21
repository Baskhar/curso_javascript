


/*
    1 - Se retornar um valor negativo, o valor de "a" será ordenado antes de "b".
    2 - Se retornar 0, a ordenação de "a" e "b" não mudará.
    2 - Se retornar um valor positivo, o valor de "b" será ordenado antes de "a".

 */


const stringArray = ['A', 'C', 'D', 'W', 'L', 'B'];
//ordena (Srings)
console.log(stringArray.sort());
console.log(stringArray.reverse());


const numberArray = [10, 20, 30, 40, 50, 1000, 1, 55, 15];
//ordena (number)
console.log(numberArray.sort((a, b) => a - b));
console.log(numberArray.sort((a, b) => a - b).reverse());



const objArray = [
    {
        nome: "walysson cruz",
        idade: 22,
    }, {
        nome: "Karina santos",
        idade: 22,
    }, {
        nome: "antonio cruz",
        idade: 54,
    }, {
        nome: "catia cruz",
        idade: 54,
    }, {
        nome: "cristiano ronaldo",
        idade: 42,
    }, {
        nome: "gabriel todelo",
        idade: 38,
    }, {
        nome: "fabricio werdum",
        idade: 42,
    }, {
        nome: "sérgiuo sacani",
        idade: 45,
    }, {
        nome: "fracisco josé",
        idade: 58,
    }, {
        nome: "gustavo matos",
        idade: 25,
    },{
        nome: "dielson santos",
        idade: 25,
    },
];

//ordenando
console.log(objArray.sort((a,b)=> a.nome.localeCompare(b.nome)));
console.log(objArray.sort((a,b)=> a.nome.localeCompare(b.nome)).reverse());
console.log(objArray.sort((a,b)=> a.idade - b.idade));
console.log(objArray.sort((a,b)=> a.idade - b.idade).reverse());