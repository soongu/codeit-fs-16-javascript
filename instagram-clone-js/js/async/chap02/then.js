// instagram-clone-js/js/then.js
const likePromise = new Promise((resolve) => {
  setTimeout(() => resolve(42), 400);
});

console.log('좋아요를 세는 중이에요');

likePromise.then((count) => {
  console.log(`좋아요 ${count}개를 받았어요`);
});
