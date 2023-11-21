const pedidos = [
    {
        id: 420,
        nome: "Walysson",
        alimento: 'Pizza',
        bebida: 'Suco de Cupuaçu',
        preco : 100,
    },
    {
        id: 152,
        nome: "Karina",
        alimento: 'Coxinha',
        bebida: 'Suco de Cupuaçu',
        preco : 184,    },
    {
        id: 29,
        nome: "Vitor",
        alimento: 'Churrasco',
        bebida: 'Suco de Uva',
        preco : 39,
    },
    {
        id: 33,
        nome: "Joao",
        alimento: 'MAcarronada',
        bebida: 'Refri',
        preco : 10,
    },
    {
        id: 55,
        nome: "Lucas",
        alimento: 'Feijoada',
        bebida: 'Chope',
        preco : 90,
    },

];

/**
 * 
 * A ideia dele é pegar todos os valores de um Array e condensá-los em um só.
 */

const balencete = pedidos.reduce((total,element)=>{

    return total + element.preco;

    //vai incromentando a variavel total ao 0.
},0);

console.log(balencete);