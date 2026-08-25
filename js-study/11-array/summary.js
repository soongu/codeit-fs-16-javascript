// ~/js-study/summary.js
const weekLikes = [66, 102, 138, 174, 210, 246, 282];

const summarize = (list) => {
  let total = 0;

  for (const likes of list) {
    total += likes;
  }

  return '7일간 좋아요 ' + total + '개';
};

console.log(weekLikes.join());
console.log(weekLikes.join(', '));
console.log(weekLikes.join(' '));
console.log(summarize(weekLikes));


const add = (list) => {
  let sum = 0;
  for (const n of list) {
    sum += n;
  }
  return sum;
}

console.log(add([10, 20, 30, 40]));
