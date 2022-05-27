/*
  - Perguntar o nome do usuário.
  - Pedir para o usuário digitar dois números.
  - Fazer os cálculos soma, substração, multiplicação, divisão e resto da divisão.
  - Mostrar apenas um alert com os resultados das operações.
  
  - Verificar se o resultado da soma é par ou impar. Mostrar 
  a mensagem "Resuldado da soma X é par" ou "Resuldado da soma X é impar"

  - Verificar se os dois são iguais.

*/

let userName = prompt("Olá! Por favor, digite seu nome.");

let firstNumber = Number(prompt(`Let's go ${userName}! Comece digitando o primeiro número.`));
let secondNumber = Number(prompt(`Por fim ${userName}, digite o segundo número para nossas operações.`));

// Operações

let resultSun = firstNumber + secondNumber

let subtractionResult = firstNumber - secondNumber

let multiplicationResult = firstNumber * secondNumber

let divisionResult = firstNumber / secondNumber

let resultRestDivision = firstNumber % secondNumber

alert(
  `
  Hey ${userName}, aqui está o resultado das operações.

  Soma: ${resultSun}
  Subtração: ${subtractionResult}
  Multiplicação: ${multiplicationResult}
  Divisão: ${divisionResult}
  Resto da Divisão: ${resultRestDivision}

  `
);

// Verifica se o número é PAR ou IMPAR.

if(resultSun % 2 == 0) {
  alert(`Resuldado da soma foi ${resultSun} então é Par.`);
}
else {
  alert(`Resuldado da soma foi ${resultSun} então é Impar.`);
}

// Verifica se os números inseridos são IGUAIS ou DIFERENTES.

if(firstNumber == secondNumber) {
  alert(`Os números inseridos, ${firstNumber} e ${secondNumber} são Iguais`);
}
else {
  alert(`Os números inseridos ${firstNumber} e ${secondNumber} são Diferentes`)
}
