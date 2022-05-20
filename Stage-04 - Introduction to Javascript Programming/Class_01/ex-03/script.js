/* 
  Capturar dois números e realizar operações matemática com soma,
  subtração, multiplicação, divisão e resto da divisão.
*/ 

let firstNumber = prompt("Digite o primeiro número!");
let secondNumber = prompt("Digite o segundo número");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const resultSum = firstNumber + secondNumber

const subtractionResult = firstNumber - secondNumber

const multiplicationResult = firstNumber * secondNumber

const divisionResult = Math.round(firstNumber / secondNumber);

const resultRemainderDivision = firstNumber % secondNumber

alert(`O resultado da operação soma é ${resultSum}`);
alert(`O resultado da operação subtração é ${subtractionResult}`);
alert(`O resultado da operação multiplicação é ${multiplicationResult}`);
alert(`O resultado da operação divisão é ${divisionResult}`);
alert(`O resultado da operação resto da divisão é ${resultRemainderDivision}`);