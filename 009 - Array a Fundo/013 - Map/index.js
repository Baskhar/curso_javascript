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

]

/* 
    - O método Map além de interar todo o Array ele é muito bom para editar o iterando ( resumindo o Array)

*/

pedidos.map((element, index) => {
    console.log(index, element);

    if(element.id == 29){
        return element.alimento = 'kibe';
    }
   
});
console.log(pedidos);
