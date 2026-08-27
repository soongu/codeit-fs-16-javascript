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


// step 4
const fillTags = (article, hashtags) => {
  const box = article.querySelector('.hashtags');

  for (const old of box.querySelectorAll('.hashtag-chip')) {
    old.remove();
  }

  for (const tag of hashtags) {
    const chip = document.createElement('span');
    chip.classList.add('hashtag-chip');
    chip.textContent = `#${tag}`;
    box.append(chip);
  }
};

fillTags(card, posts[4].hashtags);

const show = (post) => {
  fillTags(card, post.hashtags);
  const chips = [...card.querySelectorAll('.hashtag-chip')];
  const shown =
    chips.length === 0
      ? '(없음)'
      : chips.map((chip) => chip.textContent).join(' ');
  console.log(
    `${post.username} 태그${post.hashtags.length}개 → 칩${chips.length}칸${shown}`,
  );
};

show(posts[2]);

const makeLink = (url, text) => { 
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.textContent = text;
  box.append(link);
};

makeLink('https://www.google.com', '구글로 이동');
makeLink('https://www.github.com', '깃허브로 고고고~');


// box.innerHTML += `<a id=${userId} href="https://www.naver.com">네이버로 이동</a>`;


// step 7
const cardShell = `
  <header class="post-header">
    <img alt="" />
    <p></p>
    <button type="button" class="more-btn">⋯</button>
  </header>

  <figure>
    <img alt="" />
    <figcaption></figcaption>
  </figure>

  <div class="post-actions">
    <button type="button" class="icon-btn">♡</button>
    <button type="button" class="icon-btn">💬</button>
    <button type="button" class="icon-btn">↗</button>
  </div>

  <div class="hashtags"></div>
`;

const fillLocation = (article, location) => {
  const place = location?.name;

  if (place) {
    const line = document.createElement('p');
    line.classList.add('post-location');
    line.textContent = place;
    article.querySelector('.post-header p').after(line);
  }
};

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

  // article.querySelectorAll('.hashtag-chip').forEach((chip, index) => {
  //   chip.textContent = `#${post.hashtags[index]}`;
  // });
};

const createCard = (post) => {
  const article = document.createElement('article');
  article.innerHTML = cardShell;

  fillPost(article, post);
  fillTags(article, post.hashtags);
  return article;
};

const main = document.querySelector('main');
main.innerHTML = '';

for (const post of posts) {
  main.append(createCard(post));
}
