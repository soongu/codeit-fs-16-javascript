
function getSumInRange(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSumInRange(1, 100));
console.log(getSumInRange(5, 9));