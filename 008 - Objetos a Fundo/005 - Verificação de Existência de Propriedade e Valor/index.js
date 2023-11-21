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


// hasOwnProperty | propertyName  in Tenis

if(Tenis.hasOwnProperty('tamanho')){
    console.log("Existe");
}else{
    console.log("Não existe tamanho");
}

console.log('tamanho' in Tenis);