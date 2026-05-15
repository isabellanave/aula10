// Ler a idade de 15 pessoas; mostrar:
//      A. quantidade de crianças (0 a 12 anos)
//      B. quantidade de jovens de (13 a 19 anos)
//      C. quantidade de adultos (20 a 60 anos)
//      D. quantidade de idosos (maiores que 60 anos)
//      E. ler o sexo de 10 pessoas. Garantir que o sexo será (F/M). Mostrar a quantidade de mulheres e a quantidade de homens.

let idade, sexo;
let contadorCriancas = 0;
let contadorJovens = 0;
let contadorAdultos = 0;
let contadorIdosos = 0;
let contadorHomens = 0;
let contadorMulheres = 0;

for(let i = 1; i <= 15; i++){
    idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`));
    if (idade >= 0 && idade <= 12){
        contadorCriancas++;
    }
    else if (idade >= 13 && idade <= 19){
        contadorJovens++;
    }
    else if (idade >= 20 && idade <= 60){
        contadorAdultos++;
    }
    else if (idade > 60){
        contadorIdosos++;
    }
}

for(let contador = 1; contador <= 10; contador++){
    sexo = prompt(`Digite o sexo da pessoa ${sexo} (F/M)`).toUpperCase();
    while (sexo !== `F` && sexo !== `M`){
        sexo = prompt(`Entrada inválida. Digite o sexo da pessoa ${contador} (F/M)`).toUpperCase();
    }
    if (sexo === `F`){
        contadorMulheres++;
    }
    else if (sexo === `M`){
        contadorHomens++;
    }
}

console.log(`Quantidade de crianças (0 a 12 anos): ${contadorCriancas}`);
console.log(`Quantidade de crianças (13 a 19 anos): ${contadorJovens}`);
console.log(`Quantidade de crianças (20 a 60 anos): ${contadorAdultos}`);
console.log(`Quantidade de crianças (maiores que 60 anos): ${contadorIdosos}`);
console.log(`Quantidade de Mulheres: ${contadorMulheres}`);
console.log(`Quantidade de Homens: ${contadorHomens}`);