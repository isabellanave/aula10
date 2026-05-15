// d) ler a idade de 8 pessoas e mostrar a menor idade. 
let menor = 999; 
let idade;
for (let i = 1; i <= 8; i++) { 
    idade = parseInt(prompt(`Digite a idade da ${i}ª pessoa:`)); 
    if (idade < menor) { 
        menor = idade; 
    } 
} 
console.log(`A menor idade é: ${menor}`);