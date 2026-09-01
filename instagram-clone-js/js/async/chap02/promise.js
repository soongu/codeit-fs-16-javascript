const uploadPromise = new Promise((resolve) => {
  setTimeout(() => {
    const resultMessage = '업로드에 성공했어요!';
    resolve(resultMessage);
  }, 3000);
});

console.log('약속을 받았어요');
console.log(`이게 무엇인가 — ${typeof uploadPromise}`);
console.log(`결과가 들어 있나1 ?`, uploadPromise);
setTimeout(() => { 
  uploadPromise.then(result => {
    console.log(`결과가 들어 있나2 ?`, result);
  });
}, 4000);