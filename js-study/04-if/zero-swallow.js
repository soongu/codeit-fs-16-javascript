const likeCount = 5;

if (likeCount === undefined) {
  console.log('좋아요 수를 서버에서 아직 못 받았어요');
} else if (likeCount > 0) {
  console.log('좋아요 ' + likeCount + '개');
} else {
  console.log('아직 좋아요가 없어요');
}
