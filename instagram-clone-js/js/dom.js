const card = document.querySelector('article');

// step1 태그 생성
const line = document.createElement('p');
line.classList.add('post-location');
line.textContent = '여의도 한강공원';

const header = card.querySelector('.post-header');

const headerTitle = header.querySelector('p');

headerTitle.after(line);

for (const child of header.children) {
  console.log(`${child.tagName}, ${child.className || '(클래스 없음)'}`);
}

// instagram-clone-js/js/dom.js
const box = document.querySelector('.hashtags');
const first = box.querySelector('.hashtag-chip');

const mark = (text) => {
  const span = document.createElement('span');
  span.textContent = text;
  return span;
};

// box.prepend(mark("[prepend]"));
// box.append(mark("[append]"));
// first.before(mark("[before]"));
// first.after(mark("[after]"));

// step 3
// instagram-clone-js/js/dom.js
const quiet = posts[1];
const chips = card.querySelectorAll('.hashtag-chip');

chips.forEach((chip, index) => {
  if (index < quiet.hashtags.length) {
    chip.textContent = `#${quiet.hashtags[index]}`;
  } else {
    chip.remove();
  }
});

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

  <p class="like-count"></p>

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
  article.querySelector('.like-count').textContent = `좋아요 ${post.likes}개`;
  const likeBtn = article.querySelector('.icon-btn');
  if (post.liked) {
    likeBtn.textContent = '♥';
    likeBtn.classList.add('is-liked');
  } else {
    likeBtn.textContent = '♡';
    likeBtn.classList.remove('is-liked');
  }
  

  fillLocation(article, post.location);
  fillTags(article, post.hashtags);
};

let feedPosts = posts.map(post => ({ ...post, liked: false }));

const toggleLike = id => { 
  feedPosts = feedPosts.map(post =>
    post.id === id
      ? {
        ...post,
        liked: !post.liked,
        likes: post.likes + (post.liked ? -1 : 1)
      }
      : post
  );
  render(feedPosts);
};

const createCard = (post) => {
  const article = document.createElement('article');
  article.innerHTML = cardShell;

  fillPost(article, post);

  article.querySelector('.icon-btn').addEventListener('click', event => { 
    toggleLike(post.id);
  });

  return article;
};

const render = (posts) => {
  const feedMain = document.querySelector('main');
  feedMain.innerHTML = '';

  for (const post of posts) {
    feedMain.append(createCard(post));
  }
};

render(feedPosts);


