// instagram-clone-js/js/sequential.js
const upload = (name, ms) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(`${name} 올렸어요`);
      resolve(name);
    }, ms),
  );

const started = Date.now();

const uploadAll = async () => {
  await upload('사진 1', 400);
  await upload('사진 2', 400);
  await upload('사진 3', 400);

  console.log(`걸린 시간${Math.round((Date.now() - started) / 100) / 10}초`);
};

uploadAll();
