const peso = 120;
const altura = 1.70;
const imc = Number((peso / (altura * altura)).toFixed(2));
console.log(typeof imc);


if (imc < 17) {
    console.log('O seu imc é: ' + imc, ', E você está Muito abaixo do peso');
} else if (imc >= 17 && imc <= 18.49) {
    console.log('O seu imc é: ' + imc, ',Você está Abaixo do peso');
} else if (imc >= 18.5 && imc <= 24.99) {
    console.log('O seu imc é: ' + imc, ',Você está no peso Ideal');
} else if (imc >= 25 && imc < 29.99) {
    console.log('O seu imc é: ' + imc, ',Você está Acima do peso');
} else if (imc >= 30 && imc <= 34.99) {
    console.log('O seu imc é: ' + imc, ',Você está em Obesidade 1');
} else if (imc >= 35 && imc <= 39.99) {
    console.log('O seu imc é: ' + imc, ',Você está em Obesidade 2');
} else if (imc >= 40) {
    console.log('O seu imc é: ' + imc, ',Você está em Obesidade Mórbida');
} else {
    console.log('Não foi possivel calcular o seu IMC');
}


