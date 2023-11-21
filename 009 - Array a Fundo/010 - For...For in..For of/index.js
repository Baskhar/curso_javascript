const myArray = [1,2,3,4,5,6];

// for ([inicialização]; [condição]; [expressão final])

for (let i = 0; i<10; i++){
    console.log(i);
}


const myArrObj = [
    {
        nome : 'Walysson',
        sobrenome: 'Cruz',
    }, {
        nome : 'Karina',
        sobrenome: 'Galvao',
    },
]


for(let i = 0; i <myArrObj.length;i++){
console.log(myArrObj[i].nome, myArrObj[i].sobrenome);
}
    
   
//for of

for(let item of myArrObj){
    console.log(item.nome);
}

//for in

const obj = {nome:"Walysson",sobrenome : 'Cruz'};


for(let item in obj){
    console.log(obj[item]);
}