// ~/js-study/ternary.js
const likeCount = 30;

const badge = likeCount > 100 ? '인기' : '일반';

console.log(badge);

console.log(likeCount > 100 ? '인기' : '일반');

const message =
  '이 게시물은 ' + (likeCount > 100 ? '인기' : '일반') + ' 게시물이에요';
console.log(message);