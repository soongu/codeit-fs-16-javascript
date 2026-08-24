// ~/js-study/notify-wrong.js
function notifyLikes(username, count=5) {
  // count = count ?? 5;
  console.log(
    username + ' 님 외 ' + count + '명이 회원님의 게시물을 좋아합니다',
  );
}

notifyLikes('jaehoon', 42);
notifyLikes('seungwoo');
