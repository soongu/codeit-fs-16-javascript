// instagram-clone-js/js/envelope.js
const peek = async (url, label) => {
  const response = await fetch(url);

  console.log(
    `${label} — ok${response.ok} · status${response.status} ·${response.statusText}`,
  );
};

const run = async () => {
  await peek('http://localhost:3001/posts', '게시물 목록');
  await peek('http://localhost:3001/postz', '주소를 틀렸을 때');
};

run();
