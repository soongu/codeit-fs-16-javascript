// ~/js-study/post-bracket.js
const post = {
  username: 'yuna',
  caption: '새벽 러닝 🌙',
  likes: 2100,
};

// for ~ of : 배열의 순회
// for ~ in : 객체의 순회 -> key를 순회함
for (const x in post) {
  console.log( x, post[x]);
}

