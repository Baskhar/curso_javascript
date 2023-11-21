/*
    Uma clousure ocorre normalmente quando uma função 
    é declarada dentro do corpo de outra, e a função interior
    referencia variáveis locais da função exterior.
*/


function QualSeuNome(name) {
    const msg = `O seu nome é: `;
    function SeuNome() {
        return `${msg} ${name}`;
        
    }
    return SeuNome();
   
}

console.log(QualSeuNome('Walysson'));


function Calculadora(num1,num2) {
    const msg = "Resultado: ";
    const Soma = ()=>{
        return `${msg} ${num1 + num2}`;
    }
    const Subtracao = ()=>{
        return `${msg} ${num1 - num2}`;
    }
    const Multiplicacao = ()=>{
        return `${msg} ${num1 * num2}`;
    }
    const Divisao = ()=>{
        return `${msg} ${num1 / num2}`;
    }
    return{
        soma: Soma(),
        subtracao: Subtracao(),
        multiplicacao: Multiplicacao(),
        divisao: Divisao(),
    };
}

console.log(Calculadora(10,5).soma);