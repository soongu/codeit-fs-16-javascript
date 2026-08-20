const likeCount = 42;
const newLikes = '8';
const followerCount = '340';

console.log(typeof likeCount, typeof newLikes, typeof followerCount);

console.log('좋아요', likeCount + Number(newLikes), '개');
console.log('팔로워', Number(followerCount) + 1, '명');
