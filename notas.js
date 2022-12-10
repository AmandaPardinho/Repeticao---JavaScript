console.log("Num determinado semestre, um aluno fez um certo número de provas.\n\
Deve-se criar uma lista com todas as notas do aluno e calcular qual foi sua média no semestre.")

let notas = [];
let soma = 0;

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(8);
notas.push(5);
notas.push(8);

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

console.log(soma);

let media = soma / notas.length;
console.log(media.toFixed(2));