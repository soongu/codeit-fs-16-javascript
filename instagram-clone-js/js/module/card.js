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

const fillComments = (article, comments) => {
  const list = article.querySelector('.comment-list');

  for (const old of list.querySelectorAll('li')) {
    old.remove();
  }

  for (const text of comments) {
    const line = document.createElement('li');
    line.textContent = text;
    list.append(line);
  }
};

const fillPost = (article, post) => {
  article.setAttribute('data-id', post.id);
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
  article.querySelector('.like-btn').textContent = post.liked ? '♥' : '♡';

  const box = article.querySelector('.comment-form textarea');
  box.setAttribute('id', `comment-${post.id}`);
  article
    .querySelector('.comment-form label')
    .setAttribute('for', `comment-${post.id}`);

  fillLocation(article, post.location);
  fillTags(article, post.hashtags);
  fillComments(article, post.comments);
};

export const createCard = (post) => {
  const article = document.createElement('article');
  article.innerHTML = cardShell;
  fillPost(article, post);
  return article;
};
