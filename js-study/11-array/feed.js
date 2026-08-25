// ~/js-study/feed.js
const usernames = ['jaehoon', 'minji', 'seungwoo'];
const captions = [
  '오늘 한강 노을 실화냐 🌇',
  '새로 생긴 카페 ☕',
  '3년 만에 다시 뛰었다',
];
const likeCounts = [1240, 0, 320];

for (let i = 0; i < usernames.length; i++) {
  console.log(usernames[i] + ' · 좋아요 ' + likeCounts[i] + '개');
  console.log('  ' + captions[i]);
  console.log('======================')
}
