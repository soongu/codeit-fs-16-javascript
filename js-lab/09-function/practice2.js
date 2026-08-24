// ~/js-lab/practice2.js
function storyViews(day, story) {
  return day * 15 + story * 30;
}

function dayTotal(day) {
  let sum = 0;

  for (let story = 1; story <= 3; story++) {
    sum += storyViews(day, story);
  }

  return sum;
}

console.log('1일차 조회수 ' + dayTotal(1) + '회');
console.log('2일차 조회수 ' + dayTotal(2) + '회');
