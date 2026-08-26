console.log(document.title);
console.log(document.documentElement.children);
console.log(document.head.children);

// 댓글 입력창인 textarea에 접근하기
console.log(
  document.body.children[1].children[0].children[4].children[0].children[1]
    .value,
);
document.body.children[1].children[0].children[4].children[0].children[1].value =
  '하하호호후후';

const textarea = document.querySelector('body form > #comment');
console.log('찾은 태그: ', textarea);

const header = document.querySelector('.post-header');
console.log('찾은 것:', header?.tagName);

const again = document.querySelector('.post-header');
console.log('두 번 찾으면 같은 것인가', header === again);

const buttons = [...document.querySelectorAll('button')];

console.log([10, 20, 30]);
console.log({
  0: '짜장면',
  1: '짬뽕',
  2: '볶음밥',
  length: 3
});

// 유사 배열을 실제 배열로 바꾸는 방법 - 스프레드
const buttonArray = [...buttons];

console.log(buttons);
console.log(buttonArray);

console.log('찾은 개수', buttons.length);
console.log('첫 번째', buttons[0].tagName);
console.log('map 이 있나', typeof buttons.map);
console.log('forEach 는', typeof buttons.forEach);

const actions = document.querySelector(".post-actions");

console.log("화면 전체 버튼", document.querySelectorAll("button").length);
console.log("이 줄 안의 버튼", actions.querySelectorAll("button").length);