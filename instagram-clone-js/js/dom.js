// instagram-clone-js/js/dom.js
import { showCommentError, showToast } from './module/toast.js';
import { saveFeed, loadFeed } from './interactive/chap06/storage.js';


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

const createCard = (post) => {
  const article = document.createElement('article');
  article.innerHTML = cardShell;
  fillPost(article, post);
  return article;
};

const feedMain = document.querySelector('main');

// 고정 헤더 높이를 CSS 에 알려준다.
// showProfile() 이 헤더 안에 프로필 줄을 붙이면 헤더가 그만큼 커지는데,
// CSS 혼자서는 그 변화를 알 수 없어 첫 게시물이 헤더 밑에 깔린다.
const siteHeader = document.querySelector('.site-header');

const syncHeaderHeight = () => {
  document.documentElement.style.setProperty(
    '--header-height',
    `${siteHeader.offsetHeight}px`,
  );
};

// observe() 하는 순간 한 번 실행되고, 이후 높이가 바뀔 때마다 다시 실행된다
new ResizeObserver(syncHeaderHeight).observe(siteHeader);

const sentinel = document.createElement('div');
sentinel.classList.add('scroll-sentinel');
feedMain.append(sentinel);

const render = (list) => {
  for (const old of feedMain.querySelectorAll('article')) {
    old.remove();
  }

  for (const post of list) {
    feedMain.insertBefore(createCard(post), sentinel);
  }
};

const describeStatus = (status) => {
  if (status === 404) {
    return '그런 건 없대요';
  }

  if (status >= 500) {
    return '서버가 아픈가 봐요. 잠시 뒤에 다시 해주세요';
  }

  return `서버가 ${status} 로 답했어요`;
};

const loadPosts = async (page) => {
  const response = await fetch(
    `http://localhost:3001/posts?_page=${page}&_per_page=3`,
    {
      signal: AbortSignal.timeout(2000),
    },
  );

  if (!response.ok) {
    throw new Error(
      `게시물을 못 받았어요 — ${describeStatus(response.status)}`,
    );
  }

  const envelope = await response.json();

  return {
    posts: envelope.data.map((post) => ({ ...post, id: Number(post.id) })),
    next: envelope.next,
  };
};

const loadProfile = async () => {
  const response = await fetch('http://localhost:3001/users/1');

  if (!response.ok) {
    throw new Error(`계정을 못 받았어요 — ${describeStatus(response.status)}`);
  }

  return response.json();
};

const createComment = async (postId, text) => {
  const response = await fetch('http://localhost:3001/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ postId, username: 'jaehoon', text }),
  });

  if (!response.ok) {
    throw new Error(`댓글을 못 보냈어요 — ${describeStatus(response.status)}`);
  }

  return response.json();
};

const loadComments = async () => {
  const response = await fetch('http://localhost:3001/comments');

  if (!response.ok) {
    throw new Error(`댓글을 못 받았어요 — ${describeStatus(response.status)}`);
  }

  return response.json();
};

let feedPosts = [];

const addComment = (id, text) => {
  feedPosts = feedPosts.map((post) =>
    post.id === id ? { ...post, comments: [...post.comments, text] } : post,
  );
  render(feedPosts);
};

const toggleLike = (id) => {
  feedPosts = feedPosts.map((post) =>
    post.id === id
      ? {
          ...post,
          liked: !post.liked,
          likes: post.likes + (post.liked ? -1 : 1),
        }
      : post,
  );
  saveFeed(feedPosts);
  render(feedPosts);
};

feedMain.addEventListener('click', (event) => {
  const button = event.target.closest('.icon-btn');

  if (!button) {
    return;
  }

  const id = Number(button.closest('article').getAttribute('data-id'));

  if (button.classList.contains('like-btn')) {
    toggleLike(id);
  } else if (button.classList.contains('comment-btn')) {
    document.querySelector(`#comment-${id}`).focus();
  } else if (button.classList.contains('share-btn')) {
    window.location.hash = `post-${id}`;
  }
});

let sending = false;

feedMain.addEventListener('submit', async (event) => {
  event.preventDefault();

  const box = event.target.querySelector('textarea');
  const text = box.value.trim();

  if (text === '' || sending) {
    return;
  }

  sending = true;

  const button = event.target.querySelector('button');

  button.disabled = true;
  button.textContent = '게시 중...';

  const id = Number(event.target.closest('article').getAttribute('data-id'));

  try {
    const saved = await createComment(id, text);

    addComment(id, saved.text);
    box.value = '';
  } catch (reason) {
    showCommentError(event.target, reason.message);
  } finally {
    sending = false;
    button.disabled = false;
    button.textContent = '게시';
  }
});



const showProfile = (profile) => {
  const line = document.createElement('p');
  line.classList.add('my-profile');
  line.textContent = `${profile.username} 님 · 팔로워 ${profile.followers}명`;
  document.querySelector('.site-header nav').append(line);
};

let myComments = [];
let currentPage = 1;

const grow = (posts) => {
  const saved = loadFeed() ?? [];

  return posts.map((post) => {
    const mine = saved.find((item) => item.id === post.id);
    const mySlice = myComments.filter((comment) => comment.postId === post.id);

    return {
      ...post,
      liked: mine?.liked ?? false,
      comments: mySlice.map((c) => c.text),
    };
  });
};

let loading = false;
let hasMore = true;

const loadPage = async () => {
  if (loading || !hasMore) {
    return;
  }

  loading = true;

  try {
    console.log(`${currentPage}페이지를 달라고 했어요`);

    const { posts, next } = await loadPosts(currentPage);

    feedPosts = [...feedPosts, ...grow(posts)];
    render(feedPosts);

    console.log(`화면에 ${feedPosts.length}장 · 다음 ${next}`);

    hasMore = next !== null;
    currentPage += 1;
  } catch (reason) {
    showToast(reason.message);
  } finally {
    loading = false;
  }
};

const watchSentinel = () => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      loadPage();
    }
  });

  observer.observe(sentinel);
};

const start = async () => {
  render([]);

  const [profile, comments] = await Promise.allSettled([
    loadProfile(),
    loadComments(),
  ]);

  if (profile.status === 'fulfilled') {
    showProfile(profile.value);
  } else {
    showToast(profile.reason.message);
  }

  if (comments.status === 'fulfilled') {
    myComments = comments.value;
  } else {
    showToast(comments.reason.message);
  }

  await loadPage();
  watchSentinel();
};

start();
