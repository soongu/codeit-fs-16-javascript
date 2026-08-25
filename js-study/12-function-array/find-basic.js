// ~/js-study/find-basic.js
const weekLikes = [66, 102, 138, 174, 210, 246, 282];
const isPopular = (likes) => likes >= 100;

console.log(weekLikes.find(likes => likes >= 1500) ?? '검색 결과가 없습니다.');
