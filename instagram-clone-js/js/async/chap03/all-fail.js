// instagram-clone-js/js/all-fail.js
const upload = (name, ms, works = true) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log(`${name} 작업이 끝났어요 (${works ? '성공' : '실패'})`);

      if (works) {
        resolve(name);
      } else {
        reject(`${name} 업로드 실패`);
      }
    }, ms),
  );

Promise.all([
  upload('사진 1', 300),
  upload('사진 2', 500, false),
  upload('사진 3', 900),
])
  .then((names) => console.log(`받은 것 —${names.join(' / ')}`))
  .catch((reason) => console.log(`전체 실패 —${reason}`));
