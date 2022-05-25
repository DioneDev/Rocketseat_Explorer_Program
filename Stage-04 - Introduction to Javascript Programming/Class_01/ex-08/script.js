/*
  =================================== INTERAGINDO COM MENU ===================================

  Faça um programa que tenha um menu e apresente a seguinte mensagem:

  `Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `
  O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

  - Caso o usuário digite 1, ele poderá cadastrar um item na lista.
  - Caso o usuário digite 2, ele poderá ver os itens cadastrados.
  - Se não houver item cadastrado, mostrar a mensagem: "Não existe itens cadastrado. Por favor digite 1 para cadastrar."
  - Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let userOption
let itemList = []

while(userOption != 3) {

  userOption = Number(prompt(
    `Olá usuário! Digite o número da opção desejada.
  
      1. Cadastrar um item na lista
      2. Mostrar itens cadastrados
      3. Sair
    `
  ));

  switch(userOption) {

    case 1:
      let item = prompt("Digite o nome do item");
      itemList.push(item);
    break

    case 2:
      if(itemList.length == 0) {
        alert("Não existe itens cadastrado. Por favor digite 1 para cadastrar.");
      }
      else {
        alert(itemList);
      }
    break

    case 3:
      alert("Lista encerrada com sucesso.");
    break

    default:
    alert("Opção inválida. Por favor, tente novamente.");
  }
}



