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
        bebida: 'Guaraná Jesus',
    },
    {
        id: 55,
        nome: "Lucas",
        alimento: 'Feijoada',
        bebida: 'Chope',
    },

];
// pega o primeiro valor encontrado no Array

const findId = pedidos.find((element,index)=>{
    return element.bebida === 'Suco de Cupuaçu';
});
console.log(findId);
