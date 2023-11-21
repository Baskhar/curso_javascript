let Tenis = {
    tamanho: 45,
    estoque: true,
};


//deletando
delete Tenis.estoque;
console.log(Tenis);


//adicionando
Tenis.estoque = true;
console.log(Tenis);