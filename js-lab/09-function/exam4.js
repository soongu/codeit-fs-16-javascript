
function calculateAverage(total, subjectCount) {
  return (total / subjectCount).toFixed(2);
}

function calculateGrade(average) {
  let grade;
  if (average >= 90) {
    grade = 'A';
  } else if (average >= 80) {
    grade = 'B';
  } else if (average >= 70) {
    grade = 'C';
  } else {
    grade = 'F';
  }
  return grade;
}


function getAverageAndGrade(korean, english, math) {

  const total = korean + english + math;
  const average = calculateAverage(total, 3);

  console.log('평균 점수: ' + average);
  console.log('학점: ' + calculateGrade(average));
}

getAverageAndGrade(85, 90, 78);
