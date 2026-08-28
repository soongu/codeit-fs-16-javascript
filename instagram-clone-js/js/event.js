
const buttons = document.querySelectorAll('.icon-btn');
// console.log(buttons);

// buttons.forEach(btn => {
//   btn.addEventListener('click', (event) => {
//     const pushed = event.target.textContent;
//     const attached = event.currentTarget.textContent;

//     console.log(
//       `눌린 것: ${pushed} · 리스너를 붙인 것: ${attached} · 둘이 같은가${event.target === event.currentTarget}`,
//     );
//   });
// });

const hearts = [...document.querySelectorAll('.icon-btn')].filter(
  (icon) => icon.textContent === '♡'
);

hearts.forEach(likeIcon => {
  likeIcon.addEventListener('click', (event) => { 
    // console.log('좋아요가 클릭됨!', event);
    event.target.textContent = event.target.textContent === '♡' ? '♥' : '♡';
    event.target.classList.toggle('is-liked');
  });
});

// document.body.innerHTML = '<a href="https://www.naver.com"">네이버링크</a>';

const link = document.querySelector('a');
link.addEventListener('click', event => {
  const isOk = confirm('정말로 이동하시겠습니까?');
  console.log(isOk);
  if (!isOk) {
    // 링크이동 금지
    event.preventDefault();
  }
});