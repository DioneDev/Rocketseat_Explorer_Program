/*
  Perguntar o nome do aluno
  Perguntar as 3 notas do bimestre

  Media da escola deve ser 6

  Se o aluno passou no bimestre, mostrar na tela PARABÉNS.

  Se o aluno não passou no bimestre, motivar o aluno para
  dar seu melhor na prova de recuperação.

  Em ambos os casos, mostrar uma mensagem com o nome do aluno e nota.
*/

let studentName = prompt("Olá, qual é o seu nome?");

let testGrade1 = prompt(`Por gentileza ${studentName}, informe a nota da primeira prova`);
let testGrade2 = prompt(`Por gentileza ${studentName}, informe a nota da segunda prova`);
let testGrade3 = prompt(`Por gentileza ${studentName}, informe a nota da terceira prova`);

let studentAverage = (Number(testGrade1) + Number(testGrade2) + Number(testGrade3)) / 3

studentAverage = studentAverage.toFixed(1);

const schoolAverage = 6

if(studentAverage >= schoolAverage) {
  alert(`PARABÉNS ${studentName}!! Você foi aprovado(a) no bimestre.`);
  alert(
    `Média Final\n
    ${studentName}: Nota ${studentAverage}`
  );
}
else {
  alert(
    "Infelizmente, você não foi aprovado(a) de primeira. Mas não se preocupe, você ainda pode dar seu melhor na prova de recuperação."
  );
  alert(
    `Média Final\n
    ${studentName}: Nota ${studentAverage}`
  );
}