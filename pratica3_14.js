// c) ler dez números e mostrar o produto dos ímpares e a soma dos pares. 
let produtoImpares = 1; 
let somaPares = 0; 

for (let i = 1; i <= 10; i++) { 
    let numero = parseInt(prompt(`Digite o ${i}º número:`)); 
    if (numero % 2 === 0) { 
        somaPares += numero; 
    } 
    else { 
        produtoImpares *= numero; 
    } 
} 
console.log(`A soma dos pares é: ${somaPares}`); 
console.log(`O produto dos ímpares é: ${produtoImpares}`);