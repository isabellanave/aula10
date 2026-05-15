// f) Faça um programa que receba várias idades e que calcule e mostre a média das idades digitadas. 
let soma = 0; 
let contador = 0; 
let idade = 1; 
while (idade !== 0) { 
    idade = parseInt(prompt("Digite uma idade:"));
    if (idade !== 0) { 
        soma += idade; 
        contador++; 
    } 
} 
let media = soma/contador; 
console.log(`A média das idades é: ${media}`); 