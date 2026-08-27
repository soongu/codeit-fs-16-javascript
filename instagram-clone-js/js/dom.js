// instagram-clone-js/js/dom.js
const caption = document.querySelector('figcaption');
console.log('캡션 글자:', caption.textContent);

const username = document.querySelector('.post-header p');
console.log('작성자:', username.textContent);

caption.textContent = '새벽 러닝 🌙';
username.textContent = 'soongu';

// step2

const homeMenu = document.querySelector('.nav-menu li');
console.log(homeMenu.textContent);
console.log(homeMenu.innerHTML);

caption.textContent = '<b>굵게</b>';
console.log('글자로 넣으면:', caption.innerHTML);

caption.innerHTML = '<b>굵게</b>';
console.log('태그로 넣으면:', caption.textContent);

console.log('자식 태그:', caption.firstChild.nodeName);

// step3
const comment =
  '<img src="없는파일" onerror="console.log(\'남의 코드가 돌았다\')">';

// caption.innerHTML = comment;

// step4
const photo = document.querySelector('figure img');
console.log(photo.getAttribute('alt'));
console.log(
  document.querySelector('.post-actions').children[1].getAttribute('src'),
);

photo.setAttribute(
  'src',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTQySOMYofWD4gd7oyenqLBozcGn9NGicI9iTYXDNfw&s=10',
);

photo.setAttribute('alt', '귀여운 상어 사진');

photo.setAttribute('title', '상어는 넘무 기여워~~~');

const more = document.querySelector('.more-btn');
console.log('type 속성이 있나:', more.hasAttribute('type'));
more.removeAttribute('type');
console.log('떼고 나면:', more.hasAttribute('type'));

// step5
console.log(more.getAttribute('class'));

const label = document.querySelector('.sr-only');
console.log('라벨 글자:', label.textContent);
console.log('sr-only 가 붙어 있나:', label.classList.contains('sr-only'));

console.log('화면에서 차지하는 너비:', label.offsetWidth);

label.classList.remove('sr-only');
console.log('클래스를 뗀 뒤 1픽셀보다 넓은가:', label.offsetWidth > 1);

label.classList.add('sr-only');
console.log('다시 붙인 뒤 너비:', label.offsetWidth);

const chip = document.querySelector('.hashtag-chip');

chip.addEventListener('click', () => { 
  chip.classList.toggle('my-chip');
});

// step7
// article: 태그, post: 피드게시물 1개의 데이터
const fillPost = (article, post) => {
  article.querySelector('.post-header p').textContent = post.username;

  const avatar = article.querySelector('.post-header img');
  avatar.setAttribute(
    'src',
    `https://picsum.photos/seed/${post.username}/40/40`,
  );
  avatar.setAttribute('alt', `${post.username} 프로필 사진`);

  const photo = article.querySelector('figure img');
  photo.setAttribute('src', post.image);
  photo.setAttribute('alt', post.alt);

  article.querySelector('figcaption').textContent = post.caption;

  article.querySelectorAll('.hashtag-chip').forEach((chip, index) => {
    chip.textContent = `#${post.hashtags[index]}`;
  });
};

const card = document.querySelector('article');
fillPost(card, ranked[3]);