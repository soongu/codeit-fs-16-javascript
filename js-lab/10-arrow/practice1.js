// ~/js-lab/practice1.js
const likeText = (count) => {
  return count + '개';
};

// ① 위 함수를 한 줄 화살표로 줄이세요
const likeTextShort = (count) => count + '개';

// ② 매개변수가 하나면 소괄호도 뺄 수 있어요
const likeTextShorter = count => count + '개';

// ③ 좋아요가 1000 이상이면 "인기", 아니면 "42개" 처럼 개수를 돌려주는 함수를
//    한 줄 화살표로 만드세요 (삼항 연산자를 쓰면 한 줄에 들어갑니다)
const likeBadge = (count) => (count >= 1000 ? '인기' : likeTextShorter(count));

console.log(likeText(42));
console.log(likeTextShort(42));
console.log(likeTextShorter(42));
console.log(likeBadge(1240));
console.log(likeBadge(42));
