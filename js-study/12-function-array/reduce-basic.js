const weekLikes = [66, 102, 138, 174, 210, 246, 282];

let total = 0;

for (const likes of weekLikes) {
  total += likes;
}

// console.log('반복문으로 ' + total + '개');

const sum = weekLikes.reduce((acc, curr) => acc + curr, 0);

console.log('reduce 로 ' + sum + '개');
