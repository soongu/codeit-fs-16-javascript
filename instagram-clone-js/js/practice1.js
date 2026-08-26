

const simpleH1 = document.querySelector('h1');
const complexH1 = document.querySelector('body main h1');

const simpleImg = document.querySelector('section img');
const complexImg = document.querySelector('body main section img');

console.log('이름을 두 방법으로 찾았을 때 같은 것인가',
  (simpleH1 === complexH1));
   
console.log(
    '사진을 두 방법으로 찾았을 때 같은 것인가',
    simpleImg === complexImg,
  );