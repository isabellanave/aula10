// a) calcular e mostrar a soma e a média de 5 números fornecidos como entrada. 
let soma = 0; 
for (let i = 1; i <= 5; i++) { 
     let numero = parseFloat(prompt(`Digite o ${i}º número:`)); 
     soma += numero; 
} 

let media = soma / 5; 
console.log(`A soma é: ${soma}`); 
console.log(`A média é: ${media}`); 