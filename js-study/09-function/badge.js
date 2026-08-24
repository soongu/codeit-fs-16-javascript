// ~/js-study/badge.js
function likeBadge(count) {
  if (count >= 1000) {
    return '인기';
  } 
  return count + '개';
}

function foo() {
  for (let i = 0; i < 3; i++) {
    console.log('hello');
    if (i === 1) {
      return;
    }
  }
  console.log('메롱메롱~~~');
}

foo();


const badge = likeBadge(1240);
console.log('배지: ' + badge);
console.log('배지: ' + likeBadge(42));
