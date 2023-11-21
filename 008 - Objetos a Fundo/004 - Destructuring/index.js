const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [
        { nome: "Nike" }, { nome: "Adidas" },
    ],
    secret: 123456,
    n: 5,
    link: {
        a: "a = a",
        b: {
            c: "c = c",
        },
    },
};

const { tamanho, estoque, marcas = "Não possui marca alguma!" } = Tenis;
console.log(tamanho, estoque, marcas);


//mundando o nome das variaveis com "apelidos"
const { secret: radomNumber, n: avaliacoes } = Tenis;
//console.log(secret);
console.log(radomNumber);
console.log(avaliacoes);


// const { link: { a } } = Tenis;
// const { link: { b: { c } } } = Tenis;
const { link: { a, 
    b: { c }, }, } = Tenis;
console.log(a);
console.log(c);

console.log(
Tenis.link.a,
Tenis.link.b.c);
