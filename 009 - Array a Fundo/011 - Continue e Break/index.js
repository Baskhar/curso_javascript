const myArrObj = [
    {
        nome : 'Walysson',
        sobrenome: 'Cruz',
    }, {
        nome : 'Karina',
        sobrenome: 'Galvao',
    },{
        nome : 'Karina 2',
        sobrenome: 'Galvao 2',
    },{
        nome : 'Karina 23',
        sobrenome: 'Galvao 23',
    },
]

for(let item of myArrObj){
    if(item.nome=="Karina"){
        console.log('amor da vida');
        //pula 
        continue;
    }
    if(item.nome == "Karina 2"){
        console.log("Amor 2?")
        //para
        break;
    }
    console.log(item);
}