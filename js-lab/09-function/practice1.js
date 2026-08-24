// ~/js-lab/practice1.js

// 좋아요 수를 계산하는 함수
function likesOf(post) {
  const likeCount = post * 15 + 40;
  console.log(`${post}번 게시물의 좋아요 수: ${likeCount}`)
  return likeCount;
}

let total = 0;
let best = 0;

for (let post = 1; post <= 5; post++) {
  let likes = likesOf(post);

  total += likes;

  if (likes > best) {
    best = likes;
  }
}

console.log('합계 ' + total + '개, 최고 ' + best + '개');
