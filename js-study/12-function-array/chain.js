// ~/js-study/chain.js
const dailyLikes = (day) => {
  let sum = 0;

  for (let post = 1; post <= 3; post++) {
    sum += day * 12 + post * 5;
  }

  return sum;
};

const isPopular = (likes) => likes >= 100;

const days = [1, 2, 3, 4, 5, 6, 7];

// 7일치의 좋아요 집계현황을 좋아요가 200개 이상인 날들만
// 필터링하여 좋아요 총 합계를 구하고 싶음
const sum = days
  .map(dailyLikes)
  .filter((likes) => likes >= 200)
  .reduce((acc, cur) => acc + cur, 0);

console.log(sum);

/*
  인스타 피드 목록에서 나와 가장 교류가 많은 팔로워의 
  피드5개를 필터링하여 첫 타임라인에 
  프로필사진, 이름, 이미지캡션, 슬라이들을 매핑해서 보여줘
*/