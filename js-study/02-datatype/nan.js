const input = '여덟';
const count = Number(input);

console.log(count);
console.log(typeof count);

const likeCount = 42;
const broken = Number('여덟');

console.log(likeCount + broken);
console.log(likeCount + broken + 100);


console.log(Number(''));
console.log(Number('   '));
console.log(Number('340원'));
console.log(Number('  340  '));
console.log(Number('3.5'));
