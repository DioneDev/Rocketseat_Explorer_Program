
/* =================================== CALCULATE AVERAGE ===================================

  - Criar uma lista de estudantes.
  - Cada aluno na lista deve conter.
  * nome
  * nota da primeira prova
  * nota da segunda prova
  
  - A média do concurso é 7.
  - Criar uma função para cálcular a média de cada aluno.
  - Verificar se o aluno atingiu a média ou não.
  
  - Mostrar na tela para cada aluno o seguinte;
    - Se o aluno foi aprovado, mostrar na tela;

    `PARABÉNS X !! Você foi aprovado de primeira.

      Sua Média: X
    `
    - Se o aluno foi reprovado, mostrar na tela;

    `X, infelizmente você não foi aprovado. Mas, ainda pode fazer a prova de recuperação.
      
      Sua Média: X
    `
*/

const studentList = [

  {
    studentName: "Gabriel",
    firstTestGrade: 3,
    secondTestGrade: 5
  },

  {
    studentName: "Priscila",
    firstTestGrade: 1,
    secondTestGrade: 6 
  },

  {
    studentName: "Lucas",
    firstTestGrade: 9,
    secondTestGrade: 7 
  },

  {
    studentName: "Jonas",
    firstTestGrade: 5,
    secondTestGrade: 7 
  }
];

const contestAverage = 7
let averageResult;


// Cálcula a média de cada aluno.
function calculateAverage(student) {

  return (student.firstTestGrade + student.secondTestGrade) / 2
}

// Para cada estudante dentro da lista de estudantes.
for(student of studentList) {

  averageResult = calculateAverage(student);

  if(averageResult >= contestAverage) {
    alert(`
      PARABÉNS ${student.studentName} !! Você foi aprovado(a) de primeira.
  
      Sua Média: ${averageResult}
    `);
  }
  else {
    alert(`
      ${student.studentName}, infelizmente você não foi aprovado(a). \n
      Mas, ainda pode fazer a prova de recuperação.
      
      Sua Média: ${averageResult} \n
      Faltam ${Math.abs(averageResult - contestAverage)} pontos para aprovação.
    `);
  }
}



