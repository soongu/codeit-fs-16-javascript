// ~/js-lab/truthy-lab.js
const likeCount = 0;
const commentText = '';

if (likeCount) {
  // ① likeCount 를 그대로 조건에 넣기
  console.log('A: 좋아요 알림 보냄');
} else {
  console.log('A: 좋아요 알림 안 보냄');
}

if (likeCount > 0) {
  // ② likeCount 가 0보다 큰지 물어서
  console.log('B: 좋아요 알림 보냄');
} else {
  console.log('B: 좋아요 알림 안 보냄');
}

if (commentText) {
  // ③ commentText 를 그대로 조건에 넣기
  console.log('C: 댓글 알림 보냄');
} else {
  console.log('C: 댓글 알림 안 보냄');
}

if (commentText === '') {
  // ④ commentText 가 빈 글자인지 물어서
  console.log('D: 댓글 알림 안 보냄');
} else {
  console.log('D: 댓글 알림 보냄');
}
