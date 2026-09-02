// instagram-clone-js/js/any.js
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

Promise.any([
  askServer('서버 A', 300, false),
  askServer('서버 B', 600),
  askServer('서버 C', 400),
]).then((first) => console.log(`가장 먼저 성공 —${first}`));

Promise.any([
  askServer('서버 가', 500, false),
  askServer('서버 나', 700, false),
])
  .then((first) => console.log(`가장 먼저 성공 —${first}`))
  .catch((error) => console.log(`전부 실패 —${error.message}`));
