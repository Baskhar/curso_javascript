// setInterval(()=>{
//     returnConsole();
// },3000);


// const returnConsole = ()=>{
//     return console.log("meu console funcionou");
// };



//criando um callback function(passando o parametro como function)
const meuCallback = (func)=>{
        console.log(func());
}


meuCallback(()=>{
return 1+1;
});