// instagram-clone-js/js/dom.js
const caption = document.querySelector('figcaption');
console.log('캡션 글자:', caption.textContent);

const username = document.querySelector('.post-header p');
console.log('작성자:', username.textContent);

caption.textContent = '새벽 러닝 🌙';
username.textContent = 'soongu';

