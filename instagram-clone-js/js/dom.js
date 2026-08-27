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
console.log(photo.attributes);