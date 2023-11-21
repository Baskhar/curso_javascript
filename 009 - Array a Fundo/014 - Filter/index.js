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
        bebida: 'Coca',
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

/*
    - Como o nome já diz, o método deve ser utlizando quando temos a necessidade de filtrar nossa 1
*/

// Obs filter = Todos // find = 1

const filterRefri = pedidos.filter((element,index)=>{
    return element.bebida == "Chope";
});
console.log(filterRefri);