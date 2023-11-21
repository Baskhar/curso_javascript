/*
    1 - Nome da funcioção
    2 - Retorno
    3 - Não tem hosting
    4 - Arguments
*/

function novaFunc() {
    return 'Walysson Cruz';
}
console.log(novaFunc());

const nomeFuncArrow = () => {
    return 'Walysson Cruz'
}
console.log(nomeFuncArrow());

const nomeFuncArrowReturn = () => 'Walysson Cruz';
console.log(nomeFuncArrowReturn());

function nomeFuncArguments() {
    return arguments;
}
console.log(nomeFuncArguments('Walysson Cruz'));

const novaFuncArrowParams = (param) => param;


/*
    5- Não pode ser invocada com New
*/

// function novaFunc(){
//     return console.log(123);
// }

// new  novaFunc();

class NewFunction {
    constructor(nome) {
        this.nome = nome;
    }
}
const a = new NewFunction('Walysson Cruz');
console.log(a.nome);



/*
   6 - Contexto
   Arrow functions possuem this léximo enquanto o modelo normal possui this dinâmico.

   Isso signigica que arrow functions herdam o contexto local de onde foi declarado,
   enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado
   no momento da chamada.

   Se ele estiver associado a ninguém na chamada, ele asumirá this atomaticamente
   como contexto global, que no caso dos navegadores é window

*/
const lanches = {
    cardapio: [
        {
            nome: 'x-salada', preco: 'R$ 25'

        },
        { nome: 'x-bolovo', preco: 'R$ 30' },
    ],

    meuPedidoFuncTimeOut: function(){
      setTimeout(
        function () {
        console.log(this.cardapio);
        console.log(this);
      }.bind(this),
      1000
      );
    },
    meuPedidoFunc: function(select){
        return console.log(this.cardapio[select]);
    },
    //não consegue pegar o contexto de fora da propia função
    // meuPedidoArrowFunc: (select)=>{
    //     return console.log(this.cardapio[select]);
    // },
};

//lanches.meuPedidoFunc(1);
lanches.meuPedidoFuncTimeOut();

/* 
    7 - Constructor
    Arrow Functions não podem ser constructors, então não é possivel usar o operador new com a mesma.

*/