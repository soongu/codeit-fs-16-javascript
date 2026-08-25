// ~/js-study/find.js
for (let post = 1; post <= 100; post++) {
  console.log(post + '번 게시물 확인');
  if (post === 3) {
    console.log('찾았어요! 여기서 멈춥니다.');
    break;
  }
}
console.log('확인 끝');
