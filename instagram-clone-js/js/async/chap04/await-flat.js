// instagram-clone-js/js/await.js
const login = () =>
  new Promise((resolve) => setTimeout(() => resolve('토큰-9f2'), 300));

const loadMe = (token) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 7, name: 'jaehoon' }), 300),
  );

const loadMyPosts = (id) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(['한강 노을', '퇴근길 하늘']), 300),
  );

const show = (name, list, token) => {
  console.log(`${name} 님의 게시물${list.length}개 · 토큰${token}`);
};

console.log('--- await 으로 ---');

const openMyPage = async () => {
  const token = await login();
  const me = await loadMe(token);
  const list = await loadMyPosts(me.id);

  show(me.name, list, token);
};

openMyPage();
