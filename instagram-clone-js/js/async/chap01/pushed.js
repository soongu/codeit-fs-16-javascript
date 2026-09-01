// instagram-clone-js/js/pushed.js
const t0 = Date.now();

setTimeout(() => {
  const seconds = Math.round((Date.now() - t0) / 1000);
  console.log(
    `100ms 뒤에 해달라고 맡겼는데, 실제로는${seconds}초 뒤에 실행됐어요`,
  );
}, 100);

const end = Date.now() + 3000;
while (Date.now() < end) {}

console.log('3초짜리 동기 코드가 끝났어요');
