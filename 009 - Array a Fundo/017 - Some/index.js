const pedidos = [
    {
        id: 420,
        nome: "Walysson",
        alimento: 'Pizza',
        bebida: 'Suco de Cupuaçu',
    },
    {
        id: 152,
        nome: "Karina",
        alimento: 'Coxinha',
        bebida: 'Suco de Cupuaçu',
    },
    {
        id: 29,
        nome: "Vitor",
        alimento: 'Churrasco',
        bebida: 'Suco de Uva',
    },
    {
        id: 33,
        nome: "Joao",
        alimento: 'MAcarronada',
        bebida: 'Refri',
    },
    {
        id: 55,
        nome: "Lucas",
        alimento: 'Feijoada',
        bebida: 'Chope',
    },

];

/** 
 *  
 * O some pergunta se apenas o 1 dos valores do array equivale a sua condição.
 * **/

const existeAlimento = pedidos.some((element, index)=>{
    return  element.alimento === "Pizza";
});

console.log(existeAlimento);