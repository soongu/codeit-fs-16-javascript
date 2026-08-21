// ~/js-study/like-default.js
const likeCountA = null;
const likeCountB = 0;

console.log('게시물 A — 좋아요 ' + (likeCountA || '집계 중'));
console.log('게시물 B — 좋아요 ' + (likeCountB ?? '집계 중'));
