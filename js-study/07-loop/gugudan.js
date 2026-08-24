const level = 4; // 단수

console.log("==== for문 버전 ====");
for (let n = 1; n <= 9; n++) {
  console.log(level, 'x', n, '=', level * n);
}



console.log("==== while문 버전 ====");
let n = 1;
while ( n <= 9 ) {
  console.log(level, 'x', n, '=', level * n);
  n++;
}