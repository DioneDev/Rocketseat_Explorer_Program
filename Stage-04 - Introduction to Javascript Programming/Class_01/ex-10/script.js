/*
  =================================== CÁLCULANDO IMC ===================================

  - Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima na tela:
  `  IMC
  Paciente: X
  IMC: Y
  `
  - Criar uma função para fazer o cálculo do IMC.
  
  - Fórmula IMC: peso / (altura * altura)

*/

const patientList = [

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

function calculateIMC(weight, height) {
  
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {

  return `
    IMC
      Paciente: ${patient.name}
      IMC: ${calculateIMC(patient.weight, patient.height)}
 `
}

for(patient of patientList) {
  let IMCmessage = printPatientIMC(patient);
  alert(IMCmessage)
}