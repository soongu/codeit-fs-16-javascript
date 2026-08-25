// ~/js-study/feed.js
const usernames = ['dahye', 'jaehoon', 'minji', 'seungwoo'];
const captions = [
  '밤 산책',
  '오늘 한강 노을 실화냐 🌇',
  '새로 생긴 카페 ☕',
  '3년 만에 다시 뛰었다',
];
const likeCounts = [88, 1240, 0, 320];

const isPopular = (likes) => likes >= 1000;

for (let i = 0; i < usernames.length; i++) {
  console.log(usernames[i] + ' · 좋아요 ' + likeCounts[i] + '개');
  console.log('  ' + captions[i]);
}

const totalLikes = likeCounts.reduce((acc, likes) => acc + likes, 0);
const popularLikes = likeCounts.filter(isPopular);

console.log('--- 피드 요약 ---');
console.log('게시물 ' + usernames.length + '개 · 좋아요 ' + totalLikes + '개');
console.log('인기 게시물 ' + popularLikes.length + '개');
console.log(usernames.join(', '));
