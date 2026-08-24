
function checkAge(age) {
  const ADULT_AGE_THRESHOLD = 19;

  if (age >= ADULT_AGE_THRESHOLD) {
    return '성인입니다.';
  } else {
    return '미성년자입니다.';
  }
}


console.log(checkAge(26));
console.log(checkAge(12));