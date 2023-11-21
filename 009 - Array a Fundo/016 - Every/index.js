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
 * É BACANA ENTENTEDER QUE, SE VOCÊ TEM UMA CONDIÇÃO, ELA VAI TRATAR TODA A SUA ARRAY,
 * ASSIM PODEMOS VERIFICAR SE ELES ESTÃO OK.
 **/


const  temRefri = pedidos.every((element) =>{
    return element.bebida === 'Refri';
});

//deu false pq tem outras bebidas além de refri. Se tivesse só refri ele retornaria true
console.log(temRefri);