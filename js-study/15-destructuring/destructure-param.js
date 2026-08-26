const post = {
  username: 'jaehoon',
  caption: '오늘 한강 노을 실화냐 🌇',
  likes: 1240,
};

let { username, likes } = post;
post.username = "말똥이";

console.log(post);


const postLine = ({ username, likes }) =>
  `${username}, 좋아요 ${likes}개`;

console.log(postLine(post));