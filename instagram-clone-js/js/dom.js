// instagram-clone-js/js/dom.js
import { showCommentError, showToast } from './module/toast.js';
import { saveFeed, loadFeed } from './interactive/chap06/storage.js';
import { createCard } from './module/card.js';
import { loadComments, loadPosts, loadProfile, createComment }
  from './module/api.js';
import { store } from './module/state.js';
 

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



const addComment = (id, text) => {
  store.feedPosts = store.feedPosts.map((post) =>
    post.id === id ? { ...post, comments: [...post.comments, text] } : post,
  );
  render(store.feedPosts);
};

const toggleLike = (id) => {
  store.feedPosts = store.feedPosts.map((post) =>
    post.id === id
      ? {
          ...post,
          liked: !post.liked,
          likes: post.likes + (post.liked ? -1 : 1),
        }
      : post,
  );
  saveFeed(store.feedPosts);
  render(store.feedPosts);
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

    store.feedPosts = [...store.feedPosts, ...grow(posts)];

    render(store.feedPosts);

    console.log(`화면에 ${store.feedPosts.length}장 · 다음 ${next}`);

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
