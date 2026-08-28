
const feedGridContainer = document.querySelector('.feed-grid-container');

console.log(`사진 ${feedGridContainer.children.length}장을 리스너 1개로 받아요.`);

[...feedGridContainer.children].forEach((liTag, idx) => { 
  // liTag.setAttribute('data-seat', idx + 1);
  liTag.dataset.seat = idx + 1;
});

feedGridContainer.addEventListener('click', event => {
  const liTag = event.target.closest('li');
  if (!liTag) return;

  console.log(`${liTag.getAttribute('data-seat')}번째 사진 · ${liTag.querySelector('img').alt}`);
});