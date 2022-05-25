/*
  =================================== OBJETO EM JAVASCRIPT ===================================

  - Crie uma lista de pacientes
  - Cada paciente dentro da lista deve conter nome, idade, peso e altura.

  - Escreva uma lista contendo nome, idade, peso e altura dos pacientes.

*/

const patients = [

  {
    name: "Dione",
    age: 26,
    weight: 92,
    height: 174
  },

  {
    name: "Aline",
    age: 27,
    weight: 62,
    height: 160
  },

  {
    name: "Bruno",
    age: 30,
    weight: 85,
    height: 179
  },

  {
    name: "Luiza",
    age: 32,
    weight: 60,
    height: 150
  }
]

for(let patient of patients) {

  alert(
    `
      Informação do Paciente 
        Nome: ${patient.name}
        Idade: ${patient.age}
        Peso: ${patient.weight}
        Altura: ${patient.height}
    `
  );
}


