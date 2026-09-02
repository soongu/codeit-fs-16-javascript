// instagram-clone-js/js/where-async.js
const loadPosts = () =>
  new Promise((resolve) => setTimeout(() => resolve('게시물 8개'), 300));

const start = async () => {
  console.log('불러오기 시작');

  const list = await loadPosts();
  console.log('list: ', list);
  return list;
};

const returned = start();

returned.then(result => console.log(result));
