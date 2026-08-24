// ~/js-study/notify2.js
function notifyLikes(username, count) {
  count = count ?? 0;
  console.log(
    username + ' 님 외 ' + count + '명이 회원님의 게시물을 좋아합니다',
  );
}

notifyLikes('jaehoon', 42);
notifyLikes('minji', 7);
notifyLikes('seungwoo');
