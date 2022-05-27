/*
  =================================== JOGO DE ADVINHAR O NÚMERO ===================================

  - Mostre a mensagem ao usuário: "Adivinhe o número que estou pensando. Está entre 0 e 10".
  - Crie uma lógica para gerar um número aleatório.
  - Verificar se o número digitado é igual ao gerado pelo sistema.
  - Enquanto o usuário não adivinhar o número, mostrar a mensagem: "Não é este número, tente novamente".
  - Quando o usuário acertar o número, mostrar a mensagem: "Parabéns! Você advinhou em x tentativas".
  - Substituir o "x" da mensagem pelo número de tentativas.
*/

let userParticipation = prompt("Adivinhe o número que estou pensando. Está entre 0 e 10");

const systemNumber = Math.round(Math.random() * 10);

let xAttempts = 1

while(Number(userParticipation) != systemNumber) {
  userParticipation = prompt("Não é este número, tente novamente");
  xAttempts++
}

if(xAttempts > 1) {
  alert(`Parabéns! Você advinhou em ${xAttempts} tentativas`);
}
else {
  alert(`Parabéns! Você adivinhou de PRIMEIRA!`);
}
