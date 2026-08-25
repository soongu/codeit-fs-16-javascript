// ~/js-study/filter-basic.js
const weekLikes = [66, 102, 138, 174, 210, 246, 282];
const isPopular = (likes) => likes >= 100;

//인기게시물(좋아요 150개 이상)만 필터링
const popular = weekLikes.filter(isPopular);

console.log(weekLikes.length + '일 중');
console.log(popular);
console.log(popular.length + '일이 인기 기준을 넘었어요');
