/*
  Capture 10 items para compor a lista de supermercado.
  Após capturar os 10 items, imprima-os separando por vírgula.
*/

let items = []

for(item = 0; item < 4; item++) {
  itemName = prompt("Digite o item " + (item + 1));

  items[item] = itemName
}

alert(items);
