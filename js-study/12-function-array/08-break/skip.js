// ~/js-study/skip.js
for (let post = 1; post <= 7; post++) {
  if (post % 3 === 0) {
    continue;
  }
  console.log(post + '번 게시물을 보여줘요');
}
