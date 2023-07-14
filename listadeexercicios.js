// 1. Crie uma função que receba um vetor de números e retorne a soma de todos os elementos.


function somarNumeros(vetor) {
  let soma = 0;
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }
  return soma;
}

// Exemplo de uso:
const numeros1 = [1, 2, 3, 4, 5];
const resultadoSoma = somarNumeros(numeros1);
console.log(resultadoSoma); // Resultado: 15


//2. Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.


function concatenarPalavras(vetor) {
  return vetor.join(" ");
}

// Exemplo de uso:
const palavras = ["Olá", "mundo", "do", "código"];
const resultadoConcatenacao = concatenarPalavras(palavras);
console.log(resultadoConcatenacao); // Resultado: "Olá mundo do código"


//3. Crie uma função que receba um vetor de números e retorne o maior valor presente no vetor.

function encontrarMaiorValor(vetor) {
  let maior = vetor[0];
  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
      maior = vetor[i];
    }
  }
  return maior;
}

// Exemplo de uso:
const numeros = [10, 5, 8, 3, 12];
const resultadoMaiorValor = encontrarMaiorValor(numeros);
console.log(resultadoMaiorValor); // Resultado: 12


//4. Crie uma função que receba um vetor de números e retorne a média dos elementos.


function calcularMedia(vetor) {
  let soma = 0;
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }
  const media = soma / vetor.length;
  return media;
}

// Exemplo de uso:
const numeros2 = [2, 4, 6, 8, 10];
const resultadoMedia = calcularMedia(numeros2);
console.log(resultadoMedia); // Resultado: 6


//5. Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.


const numeros3 = [1, 2, 3, 4, 5];
const numerosAoQuadrado = numeros3.map((numero3) => numero3 ** 2);
console.log(numerosAoQuadrado); // Resultado: [1, 4, 9, 16, 25]


//6. Dado um array de palavras, utilize o método filter para retornar um novo array contendo apenas as palavras que começam com a letra 'A'.


const palavras1 = ["amigo", "arroz", "banana", "abelha"];
const palavrasComA = palavras.filter((palavra1) => palavra.charAt(0) === "a" || palavra.charAt(0) === "A");
console.log(palavrasComA); // Resultado: ["amigo", "abelha"]


//7. Dado um array de números, utilize o método forEach para imprimir no console cada número multiplicado por 3.


const numeros4 = [1, 2, 3, 4, 5];
numeros.forEach((numero4) => {
  const resultado = numero4 * 3;
  console.log(resultado);
});
// Resultado:
// 3
// 6
// 9
// 12
// 15


//8. Dado um array de números, utilize o método includes para verificar se o número 10 está presente no array.


const numeros5 = [5, 10, 15, 20, 25];
const possuiNumeroDez = numeros5.includes(10);
console.log(possuiNumeroDez); // Resultado: true


