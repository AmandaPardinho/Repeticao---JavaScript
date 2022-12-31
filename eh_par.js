console.log("Crie um programa que seja capaz de percorrer uma lista de números e imprima todo número par que for encontrado\n");

const readline = require(`node:readline`);
const {stdin: input, stdout: output} = require(`node:process`);

const leitor = readline.createInterface({
    input,
    output
});

leitor.question("Digite um número a ser inserido na lista: \n", (answer1) =>{
    leitor.question("Digite um número a ser inserido na lista: \n", (answer2) =>{
        leitor.question("Digite um número a ser inserido na lista: \n", (answer3) =>{
            leitor.question("Digite um número a ser inserido na lista: \n", (answer4) =>{
                leitor.question("Digite um número a ser inserido na lista: \n", (answer5) =>{
                    var numeros = [parseInt(answer1, 10), parseInt(answer2, 10), parseInt(answer3, 10), parseInt(answer4, 10), parseInt(answer5, 10)];
                    //console.log(numeros);
                    for(let i = 0; i < 5; i++){
                        if(numeros[i] % 2 == 0){
                            console.log(numeros[i]);
                        }
                    };
                });
            });
        });
    });
});