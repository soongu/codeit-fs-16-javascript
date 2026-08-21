// ~/js-lab/nullish-migrate.js
const nickname = '';
const likeCount = 0;
const bio = null;
const isPrivate = true;
const commentCount = 0;

console.log('=== || 로 쓴 지금 ===');
console.log('이름: ' + (nickname || '익명의 사용자'));
console.log('좋아요: ' + (likeCount || '집계 중'));
console.log('소개: ' + (bio || '소개글이 없어요'));
console.log('공개: ' + (isPrivate || '공개 계정'));
console.log('댓글: ' + (commentCount || '댓글 집계중'));

console.log('=== ?? 로 전부 바꾼다면 ===');
console.log('이름: ' + (nickname ?? '익명의 사용자'));
console.log('좋아요: ' + (likeCount ?? '집계 중'));
console.log('소개: ' + (bio ?? '소개글이 없어요'));
console.log('공개: ' + (isPrivate ?? '공개 계정'));
console.log('댓글: ' + (commentCount ?? '댓글 없음'));

console.log('=== 선택 결과 ===');
console.log('이름: ' + (nickname || '익명의 사용자'));
console.log('좋아요: ' + (likeCount ?? '집계 중'));
console.log('소개: ' + (bio || '소개글이 없어요'));
console.log('공개: ' + (isPrivate ? '비공개 계정' : '공개 계정'));
console.log('댓글: ' + (commentCount ?? '댓글 없음'));
