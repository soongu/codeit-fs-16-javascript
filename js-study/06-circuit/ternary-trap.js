// ~/js-study/ternary-trap.js
const likeCount = 30;

console.log('등급: ' + likeCount > 100 ? '인기' : '일반');
console.log('등급: ' + (likeCount > 100 ? '인기' : '일반'));

const grade =
  followerCount >= 10000
    ? '스타'
    : followerCount >= 1000
      ? '인기'
      : followerCount >= 100
        ? '성장'
        : '새싹';
