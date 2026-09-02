// instagram-clone-js/js/chain-fail.js
const step = (message, works = true) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (!works) {
        reject('팔로워 서버가 응답하지 않아요');
        return;
      }

      console.log(message);
      resolve();
    }, 200),
  );

step('1단계: 사진을 올렸어요')
  .then(() => step('2단계: 썸네일을 만들었어요'))
  .then(() => step('3단계: 팔로워에게 알렸어요', false))
  .then(() => step('4단계: 해시태그를 붙였어요'))
  .then(() => step('5단계: 추천 피드에 올렸어요'))
  .catch((reason) => console.log(`문제가 생겼어요 —${reason}`))
  .finally(() => console.log('로딩 표시를 지웠어요'));
