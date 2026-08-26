// ~/js-study/posts-sort.js
const comments = [
  { username: 'dahye', text: '우와 새벽에 대단해요', likes: 12 },
  { username: 'minji', text: '사진 미쳤다', likes: 41 },
  { username: 'jaehoon', text: '저도 같이 뛰어요', likes: 3 },
];

const ranked = comments.slice().sort((a, b) => b.likes - a.likes);
console.log(ranked);



for (const comment of ranked) {
  console.log(
    comment.username + ': ' + comment.text + ' (좋아요 ' + comment.likes + ')',
  );
}

console.log('가장 많은 공감을 받은 댓글: ' + ranked[0].username);
