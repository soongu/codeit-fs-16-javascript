// ~/js-study/map-basic.js

// 하루치 좋아요 합계를 내주는 함수
const dailyLikes = (day) => {
  let sum = 0;

  for (let post = 1; post <= 3; post++) {
    sum += day * 12 + post * 5;
  }

  return sum;
};

const days = [1, 2, 3, 4, 5, 6, 7];

// 1일차부터 7일차까지의 좋아요합계를 모두 누적하고 싶음

// const weekLikes = [];
// for (const day of days) {
//   weekLikes.push(dailyLikes(day));
// }

const weekLikes = days.map(dailyLikes);

console.log(weekLikes);


// map: 매핑 -> 추출해서 집어넣는다.
console.log('===========');

const numbers = [1, 2, 3, 4, 5];

// numbers의 모든 값에 3을 곱해서 새로운배열을 만들고 싶음
//             [3, 6, 9, 12, 15]

// map: 배열안에 있는 모든 데이터들을 특정한 형태로 변환하는 함수
const newNumbers = numbers.map(n => n + 10);
console.log(numbers);    // 원본
console.log(newNumbers); // 사본

const nameList = ['피카츄', '하츄핑', '루피', '뽀로로'];
const greetings = nameList.map(username => username + ' 안뇽~');

console.log(greetings);

// nameList에 있는 이름들을 전부 h2태그를 씌워서 문자열로 변환하시오
const h2Names = nameList.map(name => `<h2>${name}</h2>`).join('\n');
console.log(h2Names);

