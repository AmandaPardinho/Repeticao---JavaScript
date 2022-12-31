console.log("Crie um programa que, dado um número, imprima sua tabuada");

var tabuada;

const readline = require(`node:readline`);
const {stdin: input, stdout: output} = require(`node:process`);

const leitor = readline.createInterface({
    input,
    output
});

leitor.question("Digite um número:\n", (answer1) =>{
    var numero = answer1;
    for(i = 1; i <= 10; i++){
        tabuada = numero * i;
        console.log(numero + " x " + i + " = " + tabuada);
    }
});


