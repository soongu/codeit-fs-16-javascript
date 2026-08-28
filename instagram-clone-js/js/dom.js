const card = document.querySelector('article');

// step1 태그 생성
const line = document.createElement('p');
line.classList.add('post-location');
line.textContent = '여의도 한강공원';

const header = card.querySelector('.post-header');

const headerTitle = header.querySelector('p');

headerTitle.after(line);

for (const child of header.children) {
  // console.log(`${child.tagName}, ${child.className || '(클래스 없음)'}`);
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
  // console.log(
  //   `${post.username} 태그${post.hashtags.length}개 → 칩${chips.length}칸${shown}`,
  // );
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
    <button type="button" class="icon-btn like-btn">♡</button>
    <button type="button" class="icon-btn comment-btn">💬</button>
    <button type="button" class="icon-btn share-btn">↗</button>
  </div>

  <p class="like-count"></p>

  <div class="hashtags"></div>

  <ul class="comment-list"></ul>

  <footer>
    <form class="comment-form" action="#" method="post">
      <label class="sr-only">댓글 달기</label>
      <textarea name="comment" rows="2" placeholder="댓글 달기..."></textarea>
      <button type="submit" class="btn-primary">게시</button>
    </form>
  </footer>
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

  article.setAttribute('data-id', post.id);
  // 공유하기 기능을 위한 id 부여
  article.setAttribute('id', `post-${post.id}`);

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
  
  const likeBtn = article.querySelector('.like-btn');
  if (post.liked) {
    likeBtn.textContent = '♥';
    likeBtn.classList.add('is-liked');
  } else {
    likeBtn.textContent = '♡';
    likeBtn.classList.remove('is-liked');
  }
  
  fillLocation(article, post.location);
  fillTags(article, post.hashtags);

  const box = article.querySelector('.comment-form textarea');
  box.setAttribute('id', `comment-${post.id}`);
  
  article
    .querySelector('.comment-form label')
    .setAttribute('for', `comment-${post.id}`);
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
  console.log('ok');

  render(feedPosts);
};

const createCard = (post) => {
  const article = document.createElement('article');
  article.innerHTML = cardShell;

  fillPost(article, post);

  return article;
};

const feedMain = document.querySelector('main');

const render = (posts) => {
  feedMain.innerHTML = '';

  for (const post of posts) {
    feedMain.append(createCard(post));
  }
};

render(feedPosts);


// 전역적으로 main에 이벤트를 딱 1번만 건다.
feedMain.addEventListener('click', event => {

  // 모든 버튼에서만 이벤트가 터지도록 설정
  const button = event.target.closest('.icon-btn');
  // const button = event.target.classList.contains('icon-btn');
  // console.log('지금 누른것!',event.target);
  // console.log('버튼인가? ', button);

  if (!button) {
    return;
  }
  console.log(`버튼을 눌렀어요 —${event.target.textContent}`);
  
  const article = event.target.closest('article');
  const id = article.getAttribute('data-id');

  if (event.target.closest('.like-btn')) { // 좋아요 버튼에 대한 동작
    toggleLike(Number(id));
  } else if (event.target.closest('.share-btn')) {
    window.location.hash = `post-${id}`;
  } else if (event.target.closest('.comment-btn')) {
    document.querySelector(`#comment-${id}`).focus();
  }
});