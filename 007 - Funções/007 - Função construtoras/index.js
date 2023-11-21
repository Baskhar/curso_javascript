function Name(){
    this.name = 'Walysson Cruz';
    
}
const walysson = new Name();
console.log(walysson.name);


function Name2(name,sobrenome){
    this.name = name;
    this.sobreNome = ()=>{
        const nomeCompleto = `${this.name} ${sobrenome}`;
        return nomeCompleto;
    }
    
}
const walysson2 = new Name2('Walysson','Cruz 2');
console.log(walysson2.sobreNome());


function Calculadora() {
    this.soma = (num1,num2)=>{
        return  `${num1+num2}`;
    }
    this.subtracao = (num1,num2) =>{
        return`${num1 - num2}`;
    }
}

const calc= new Calculadora();
console.log(calc.soma(1,2));
console.log(calc.subtracao(1,2));