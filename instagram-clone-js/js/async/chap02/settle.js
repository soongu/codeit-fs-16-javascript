// instagram-clone-js/js/settle.js
const countLikes = (works) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (works) {
          resolve(42);
        } else {
          reject('네트워크가 끊겼어요');
        }
      },
      works ? 400 : 800,
    );
  });

countLikes(true)
  .then((count) => console.log(`[성공] 좋아요 ${count}개를 받았어요`))
  .catch((reason) => console.log(`[성공] 문제가 생겼어요 — ${reason}`))
  .finally(() => console.log('[성공] 로딩 표시를 지웠어요'));

countLikes(false)
  .then((count) => console.log(`[실패] 좋아요 ${count}개를 받았어요`))
  .catch((reason) => console.log(`[실패] 문제가 생겼어요 — ${reason}`))
  .finally(() => console.log('[실패] 로딩 표시를 지웠어요'));
