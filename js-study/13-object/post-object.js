// ~/js-study/post-object.js
const username = 'yuna';
const caption = '새벽 러닝 🌙';
const likes = 2100;

console.log(username);
console.log(caption);
console.log(likes);

const post = {
  username: 'yuna',
  caption: '새벽 러닝 🌙',
  likes: 2100,
};

console.log(post);

console.log(post.username);
console.log(post.likes);
console.log(post.username + ' · 좋아요 ' + post.likes + '개');