/* 
    Objeto: Tenis (Propiedade) "cardaço","palmilha"
    Objeto: Celular (Propiedade)
    Objeto: Drone (Propiedade)

    Propriedades / Atributos / Funcionalidades

*/

let Tenis = {
    tipo: "Tenis de corrida",
    cardaco: "G",
    estoque: false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            altura: 35,
            largura: 40,
            profundidade: 10,
        },
    },
    marcasArrayValores: ["Nike", "Adidas", "Etc"],
    marcasArrayObj: [
        {
            nome: "Nike",
        }, {
            nome: "Adidadas",
        }, {
            nome: "Etc",
        },
    ],
    getMarcaArrayValores : function (params) {
        return  this.marcasArrayObj[params];
    },
    getMarcaArrayObj : function (params) {
        return  this.marcasArrayObj[params].nome;
    }
};

console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);

