// instagram-clone-js/js/two-failures.js
const tryLoad = async (url, label) => {
  try { 
    const response = await fetch(url);
    const body = await response.json();

    console.log(
      `${label} — 여기까지 왔어요. 게시물 목록인가${Array.isArray(body)}`,
    );
  } catch (reason) {
    console.log(`${label} — 던져졌어요.${reason.name}`);
  }
};

const run = async () => {
  await tryLoad('http://localhost:3001/postz', '서버는 살아 있는데 없대요');
  await tryLoad('http://localhost:3999/posts', '아무도 안 듣는 포트');
};

run();
