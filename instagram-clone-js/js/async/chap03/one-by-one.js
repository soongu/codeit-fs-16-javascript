// instagram-clone-js/js/one-by-one.js
const upload = (name, ms) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(`${name} 올렸어요`);
      resolve(name);
    }, ms),
  );

const started = Date.now();

upload('사진 1', 300)
  .then(() => upload('사진 2', 500))
  .then(() => upload('사진 3', 400))
  .then(() => {
    console.log(`걸린 시간${Math.round((Date.now() - started) / 100) / 10}초`);
  });

upload('사진1', 300);
upload('사진2', 500);
upload('사진3', 400);