// instagram-clone-js/js/timeout.js
const askServer = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve('서버 응답'), ms));

const timeout = (ms) =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject('1초를 넘겼어요'), ms),
  );

Promise.race([askServer(600), timeout(1000)])
  .then((answer) => console.log(`제때 왔어요 —${answer}`))
  .catch((reason) => console.log(`포기했어요 —${reason}`));

Promise.race([askServer(1500), timeout(1000)])
  .then((answer) => console.log(`제때 왔어요 —${answer}`))
  .catch((reason) => console.log(`포기했어요 —${reason}`));
