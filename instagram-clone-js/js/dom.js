const card = document.querySelector('article');

console.log('만들기 전:', card.querySelector('.post-location'));

// step1 태그 생성
const line = document.createElement('p');
line.classList.add('post-location');
line.textContent = '여의도 한강공원';

console.log(line);

console.log('만든 직후:', card.querySelector('.post-location'));
console.log('만든 요소의 부모:', line.parentElement);

const header = card.querySelector('.post-header');

const headerTitle = header.querySelector('p');

headerTitle.after(line);

console.log('붙인 뒤:', card.querySelector('.post-location').textContent);

for (const child of header.children) {
  console.log(`${child.tagName}, ${child.className || '(클래스 없음)'}`);
}

// instagram-clone-js/js/dom.js
const box = document.querySelector(".hashtags");
const first = box.querySelector(".hashtag-chip");

const mark = (text) => {
  const span = document.createElement("span");
  span.textContent = text;
  return span;
};

// box.prepend(mark("[prepend]"));
// box.append(mark("[append]"));
// first.before(mark("[before]"));
// first.after(mark("[after]"));

console.log([...box.children].map((el) => el.textContent).join(" "));

// step 3
// instagram-clone-js/js/dom.js
const quiet = posts[1];
const chips = card.querySelectorAll(".hashtag-chip");

console.log(`${quiet.username} 님 태그${quiet.hashtags.length}개 · 화면 칩${chips.length}칸`);

chips.forEach((chip, index) => {
  if (index < quiet.hashtags.length) {
    chip.textContent = `#${quiet.hashtags[index]}`;
  } else {
    chip.remove();
  }
});

console.log(`지운 뒤 남은 칩:${card.querySelectorAll(".hashtag-chip").length}칸`);
console.log([...card.querySelectorAll(".hashtag-chip")].map((chip) => chip.textContent).join(" "));

