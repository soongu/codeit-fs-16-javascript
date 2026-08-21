// ~/js-lab/notify.js
const notificationType = 'comment';

switch (
  notificationType // ① 무엇을 기준으로 갈라야 할까요
) {
  case 'like':
    console.log('회원님의 게시물을 좋아합니다');
    break; // ② 여기서 switch 밖으로 나가게 하세요
  case 'comment':
    console.log('회원님의 게시물에 댓글을 남겼습니다');
    // break; // ③ 여기도요
  case 'follow':
    console.log('회원님을 팔로우하기 시작했습니다');
    break;
    // ④ 어디에도 안 걸렸을 때 갈 곳
    default: console.log('새로운 알림이 있습니다');
}
