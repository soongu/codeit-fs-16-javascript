const commentCount = 25;

if (commentCount > 20) {
  // ① 댓글이 20개보다 많으면
  console.log('댓글이 활발해요');
} else if (commentCount >= 1) {
  // ② 그게 아니면서 댓글이 1개 이상이면
  console.log('댓글이 달리기 시작했어요');
} else {
  console.log('댓글이 아직 없어요'); // ③ 댓글이 하나도 없을 때 보여줄 말
}

