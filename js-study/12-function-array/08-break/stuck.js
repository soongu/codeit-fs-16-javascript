
let post = 1;
while ( post <= 7 ) {
  if (post === 3) {
    post++;
    continue;
  }
  console.log(post + '번 게시물을 보여줘요');
  post++;
}
