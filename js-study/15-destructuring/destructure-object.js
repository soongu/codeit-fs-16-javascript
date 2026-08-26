const post = {
  username: 'jaehoon',
  caption: '오늘 한강 노을 실화냐 🌇',
  likes: 1240,
};

console.log(`${post.username} · 좋아요${post.likes}개`);
console.log(`${post.caption}`);

const { username: uname, caption, likes } = post;

console.log(`${uname} · 좋아요${likes}개`);
console.log(`${caption}`);