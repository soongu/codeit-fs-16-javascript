// ~/js-lab/practice2.js
// ① 빈 배열을 만드세요
const hashtags = [];

// ② 아래 세 줄로 해시태그를 하나씩 넣으세요
hashtags.push('#한강');
hashtags.push('#노을');
hashtags.push('#일상');

// ③ 띄어쓰기 하나로 이어 붙여 한 줄로 찍으세요
console.log(hashtags.join(' '));

console.log('해시태그 ' + hashtags.length + '개');

// ④ 이번엔 쉼표와 띄어쓰기(", ")로 이어 붙이세요
console.log(hashtags.join(', '));
