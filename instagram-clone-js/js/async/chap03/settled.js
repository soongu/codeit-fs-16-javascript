// instagram-clone-js/js/settled.js
const upload = (name, ms, works = true) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (works) {
        resolve(`${name} 올렸어요`);
      } else {
        reject(`${name} 업로드 실패`);
      }
    }, ms),
  );

Promise.allSettled([
  upload('사진 1', 300),
  upload('사진 2', 500, false),
  upload('사진 3', 400),
]).then((results) => {
  console.log('results:', results);
  for (const result of results) {
    if (result.status === 'fulfilled') {
      console.log(`성공 —${result.value}`);
    } else {
      console.log(`실패 —${result.reason}`);
    }
  }

  const done = results.filter((result) => result.status === 'fulfilled');
  console.log(`${results.length}장 중${done.length}장 올라갔어요`);
});
