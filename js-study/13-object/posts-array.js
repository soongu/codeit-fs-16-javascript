const posts = [
  { username: 'yuna', caption: '새벽 러닝 🌙', likes: 2100 },
  { username: 'dahye', caption: '밤 산책', likes: 88 },
  { username: 'jaehoon', caption: '오늘 한강 노을 실화냐 🌇', likes: 1240 },
];

console.log(posts.length);
console.log(posts[0]);
console.log(posts[0].username);
console.log(posts[0]['username']);

for (const post of posts) {
  console.log(post.username + ' · 좋아요 ' + post.likes + '개');
}