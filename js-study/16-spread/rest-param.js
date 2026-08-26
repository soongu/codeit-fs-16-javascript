
function add2(n1, n2) {
  return n1 + n2;
}
function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

const addAll = (...numberArray) =>
  numberArray.reduce((acc, n) => acc + n, 0);

// console.log(add2(10, 20));
// console.log(add3(10, 20, 30));
console.log(addAll(10, 20));
console.log(addAll(10, 20, 30));
console.log(addAll(10, 20, 30, 40));