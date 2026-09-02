// instagram-clone-js/js/race.js
const askServer = (name, ms, works = true) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (works) {
        resolve(`${name} 응답`);
      } else {
        reject(`${name} 오류`);
      }
    }, ms),
  );

Promise.race([
  askServer('서버 A', 500),
  askServer('서버 B', 200),
  askServer('서버 C', 800),
]).then((winner) => console.log(`가장 빠른 답 —${winner}`));

Promise.race([askServer('서버 A', 300, false), askServer('서버 B', 700)])
  .then((winner) => console.log(`먼저 온 것 —${winner}`))
  .catch((reason) => console.log(`먼저 온 것이 실패 —${reason}`));
