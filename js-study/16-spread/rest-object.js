// ~/js-study/rest-object.js
const post = {
  id: 3,
  username: 'jaehoon',
  caption: '오늘 한강 노을 실화냐 🌇',
  likes: 1240,
  hashtags: ['한강', '노을', '서울'],
};

const { id, ...content } = post;

console.log(content);
console.log(`번호${id}`);
console.log(`나머지 이름${Object.keys(content).join(', ')}`);
console.log(`원본 이름${Object.keys(post).join(', ')}`);
