// instagram-clone-js/js/all.js
const upload = (name, ms) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(`${name} 올렸어요`);
      resolve('서빙된 음식: ' + name);
    }, ms),
  );

const started = Date.now();

Promise.all([
  upload('사진 1', 300),
  upload('사진 2', 500),
  upload('사진 3', 400),
]).then((names) => {
  console.log(`받은 것 —${names.join(' / ')}`);
  console.log(`걸린 시간${Math.round((Date.now() - started) / 100) / 10}초`);
});
  ;


