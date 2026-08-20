const likeCount = 42;
const newLikes = '8';

console.log('좋아요', likeCount + Number(newLikes), '개');

const subResult = likeCount - Number(newLikes);
console.log('뺄셈결과:', subResult);

const n1 = '10';
const n2 = '20';
// const result = +n1 + +n2;
const result = Number(n1) + Number(n2);
console.log(result);
