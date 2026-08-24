// ~/js-study/report.js
let totalPosts = 0;
let totalLikes = 0;
let popularDays = 0;

for (let day = 1; day <= 7; day++) {
  let dailyLikes = 0;

  for (let post = 1; post <= 3; post++) {
    let likes = day * 12 + post * 5;
    dailyLikes += likes;
    totalPosts++;
  }

  totalLikes += dailyLikes;

  if (dailyLikes >= 100) {
    popularDays++;
    console.log(day + '일차 좋아요 ' + dailyLikes + '개 (인기)');
  } else {
    console.log(day + '일차 좋아요 ' + dailyLikes + '개');
  }
}

console.log('--- 주간 요약 ---');
console.log('게시물 ' + totalPosts + '개');
console.log('좋아요 ' + totalLikes + '개');
console.log('인기 있었던 날 ' + popularDays + '일');
