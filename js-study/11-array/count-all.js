// ~/js-study/count-all.js
const likeCounts = [1240, 0, 320, 87, 4500, 12, 90];

console.log(likeCounts[6]);

console.log('게시물 ' + likeCounts.length + '개');
console.log('마지막 게시물 좋아요 ' + likeCounts[likeCounts.length - 1] + '개');

let total = 0;

for (let i = 0; i < likeCounts.length; i++) {
  console.log(i + 1 + '번 게시물 좋아요 ' + likeCounts[i] + '개');
  total += likeCounts[i];
}

console.log('합계 ' + total + '개');
