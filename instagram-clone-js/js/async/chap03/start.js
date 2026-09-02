// instagram-clone-js/js/start.js
const upload = (name, ms) =>
  new Promise((resolve) => {
    console.log(`${name} 출발`);
    setTimeout(() => resolve(name), ms);
  });

const jobs = [
  upload('사진 1', 300),
  upload('사진 2', 500),
  upload('사진 3', 400),
];

console.log('아직 Promise.all 은 안 불렀어요');

setTimeout(() => {
  Promise.all(jobs).then((names) =>
    console.log(`받은 것 —${names.join(' / ')}`),
  );
}, 700);
