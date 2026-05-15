// b) calcular e mostrar o produto de 10 números fornecidos como entrada. 
let produto = 1; 
for (let i = 1; i <= 10; i++) { 
    let numero = parseFloat(prompt(`Digite o ${i}º número:`)); 
    produto *= numero; 
} 
console.log(`O produto é: ${produto}`);