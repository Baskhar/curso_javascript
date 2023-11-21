function soma(numeroUm, numeroDois) {
    if (typeof numeroUm === "number" && typeof numeroDois === "number") return numeroUm + numeroDois;
return 'Você passou dados diferentes!';
    
}

console.log(soma(soma(1,4),soma(1,4)));

function subtracao(){
    return arguments;
}

console.log(subtracao(1,2,"Abc"));