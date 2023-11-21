/* 
    Promises: As promises são objetos que representam a consluão(ou falha)
    de uma tarefa assíncrona. Ekas fornecem uma sintaxe mais limpa e estruturada
    para lidar com código assíncrono, permitindo encadear chamadas e tratar erros 
    de forma mais eficiênte.
*/

const pedido = (pedido) =>{
    return new Promise((resolve,reject)=>{
        if(pedido === "Pizza"){
            return reject(`Não temos o seu pedido: [${pedido}]`)
        }
        setTimeout(()=>{
            resolve(`Chegou o seu pedido [${pedido}]`)
        },5000);
    });
}

//Não funciona com o Promisse
//console.log(pedido(`arroz`));

// pedido("Arroz").then((res)=>{
//     return `${res} da mesa 1`;
// }).then((mesa)=>{
// console.log(mesa);
// });


pedido("Pizza").then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Volte sempre");
});