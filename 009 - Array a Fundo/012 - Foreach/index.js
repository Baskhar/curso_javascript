const myArrObj = [
    {
        nome: "walysson",
        sobrenome: "cruz",
    }, 
    {
        nome: "Karina",
        sobrenome: "Galvao",
    },
    {
        nome: "Catia",
        sobrenome: "cruz",
    },
];

myArrObj.forEach((item,index) => {
    console.log(item,index);
    console.log(item,item.nome);

    if(item.nome === 'Karina'){
return console.log("Olá Cabeça");
    }
});

