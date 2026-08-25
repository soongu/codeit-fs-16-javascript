const comments = [
  {
    username: 'dahye',
    text: '우와 새벽에 대단해요',
    likes: 12,
  },
  {
    username: 'jaehoon',
    text: '저도 같이 뛰어요',
    likes: 3,
  },
  {
    username: 'minji',
    text: '사진 미쳤다',
    likes: 41,
  },
];

console.log(`댓글 ${comments.length}개`);

// 가장 많은 공감을 받은 유저의 객체를 저장할 변수
let bestLikedUser = comments[0];
for (const comment of comments) {
  console.log(`${comment.username}: ${comment.text} (좋아요 ${comment.likes})`);
  if (bestLikedUser.likes < comment.likes) {
    bestLikedUser = comment;
  }
}

const best = comments.reduce((acc, curr) => {
  return curr.likes > acc.likes ? curr : acc;
});

console.log(`가장 많은 공감을 받은 댓글: ${best.username}`)