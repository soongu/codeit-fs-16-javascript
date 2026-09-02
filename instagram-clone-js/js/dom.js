// 서버 통신 시작함수
const loadPosts = async () => { 
  console.log('서버에서 피드목록을 불러옵니다...');
  try {
    const response = await fetch('http://localhost:3001/postㅋ');
    const json = response.json();

    if (!response.ok) {
      throw new Error(
        `게시물을 못 받았어요 — 서버가${response.status} 로 답했어요`,
      );
    }

    return json;
  } catch (err) {
    console.log(err);
    const div = document.createElement('div');
    div.style.width = '200px';
    div.style.height = '100px';
    div.style.position = 'fixed';
    div.style.right = '5%';
    div.style.top = '15%';
    div.style.background = 'red';
    div.style.color = 'white';
    div.textContent = err;
    document.body.prepend(div);

    setTimeout(() => { 
      div.style.display = 'none';
    }, 20000);
  }
};

let feedPosts = loadPosts();

const card = document.querySelector('article');


const box = document.querySelector('.hashtags');
const first = box.querySelector('.hashtag-chip');



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
  fillComments(article, post.comments);

  const box = article.querySelector('.comment-form textarea');
  box.setAttribute('id', `comment-${post.id}`);
  article
    .querySelector('.comment-form label')
    .setAttribute('for', `comment-${post.id}`);
};


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

  // saveFeed(feedPosts);
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

feedPosts.then((results) => render(results.map(p => ({...p, comments:[]}))));
// render(feedPosts);


// 댓글을 등록하는 함수
const addComment = (id, text) => { 

  // 댓글이 작성되면 댓글의 내용을 posts배열에 있는 해당 피드 객체를 찾아서
  // 그 객체 안에 comments배열에 쌓는다.

  //1. id에 해당하는 객체를 탐색해낸다.
  feedPosts = feedPosts.map(post => (
      post.id === id
        ? { ...post, comments: [...post.comments, text] }
        : post
    )
  );

  // saveFeed(feedPosts);
  render(feedPosts);
};



//=========== 이벤트 바인딩 ==============//

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

feedMain.addEventListener('submit', (event) => {
  event.preventDefault();
  
  
  // 어떤 피드에 댓글을 썼는지
  const id = Number(event.target.closest('article').getAttribute('data-id'));
  // 무슨 댓글을 썼는지
  const text = event.target.querySelector('textarea').value.trim();

  addComment(id, text);


});