// ~/js-lab/practice1.js
const followerCounts = [1240, 8500, 320, 76, 420];

// ① 1000명 이상이면 큰 계정이라고 판정하는 함수를 한 줄 화살표로 만드세요
const isBig = count => count >= 1000;

// ② 각 숫자 뒤에 "명" 을 붙인 새 배열을 만드세요
const labels = followerCounts.map((count) => count + '명');

// ③ 큰 계정만 골라내세요. ①에서 만든 함수를 그대로 넘기세요
const bigOnes = followerCounts.filter(isBig);

followerCounts.find(isBig);

console.log(labels);
console.log(bigOnes);
console.log('큰 계정 ' + bigOnes.length + '개');

// ④ 원본이 안 바뀌었는지 마지막에 확인하세요
console.log(followerCounts);
