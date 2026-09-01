// instagram-clone-js/js/blocking.js
const heart = document.querySelector('.post-actions .icon-btn');

let pressed = 0;
heart.addEventListener('click', () => {
  pressed = pressed + 1;
});

console.log('이제 3초 동안 멈춰볼게요. 그동안 하트를 마구 눌러보세요.');

const end = Date.now() + 3000;
while (Date.now() < end) {}

console.log('3초가 지났어요');
console.log(`멈춰 있는 동안 하트가 반응한 횟수 —${pressed}번`);
