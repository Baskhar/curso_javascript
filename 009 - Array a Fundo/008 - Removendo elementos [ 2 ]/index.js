/*
    slice = pega os dados dentro de um range sem quebrar o Array
    splice = remove os dados do Array dentro de um range
*/

let arr = [
    {nome: "Walysson",tel:"(98) 998988 98989"},
    {nome: "Viana",tel:"(98) 998988 98989"},
    {nome: "Garcez",tel:"(98) 998988 98989"},
    {nome: "Cruz",tel:"(98) 998988 98989"},
    {nome: "Karina",tel:"(98) 998988 98989"},
    {nome: "Santos",tel:"(98) 998988 98989"},
];

console.table(arr);

//do zero ao 3(Não rmove do array e faz uma cópia)
const newArray = arr.slice(0,3)
console.table(newArray);
console.table(arr);


//do zero ao 3(Remove os itens do array)
arr.splice(0,3);
arr.splice(2,1);

console.table(arr);


