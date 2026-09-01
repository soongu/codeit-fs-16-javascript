// instagram-clone-js/js/states.js
const once = new Promise((resolve, reject) => {
  resolve('첫 번째 결과');
  resolve('두 번째 결과');
  reject('실패로 바꾸기');
});

let caught = false;

console.log(once);

once
  .then((value) => console.log(`then 이 받은 값 — ${value}`))
  .catch((reason) => {
    caught = true;
    console.log(`catch 가 받은 값 — ${reason}`);
  })
  .finally(() => {
    console.log(caught ? 'catch 가 돌았어요' : 'catch 는 돌지 않았어요');
  });
