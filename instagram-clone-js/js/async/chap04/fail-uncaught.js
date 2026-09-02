// instagram-clone-js/js/fail-uncaught.js
const upload = (name, ms, reason) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (reason === '') {
        resolve(name);
      } else {
        reject(`${name} (${reason})`);
      }
    }, ms),
  );

const uploadOne = async () => {
  try {
    const name = await upload('중요한 사진', 400, '용량 초과');
    console.log(`올렸어요 —${name}`);
  } catch (err) {
    console.log(`못 올렸어요 —${err}`);
  } finally {
    console.log('로딩 표시를 지웠어요');
  }
};

uploadOne();
