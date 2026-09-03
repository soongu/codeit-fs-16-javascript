const describeStatus = (status) => {
  if (status === 404) {
    return '그런 건 없대요';
  }

  if (status >= 500) {
    return '서버가 아픈가 봐요. 잠시 뒤에 다시 해주세요';
  }

  return `서버가 ${status} 로 답했어요`;
};

export const loadPosts = async (page) => {
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

export const loadProfile = async () => {
  const response = await fetch('http://localhost:3001/users/1');

  if (!response.ok) {
    throw new Error(`계정을 못 받았어요 — ${describeStatus(response.status)}`);
  }

  return response.json();
};

export const createComment = async (postId, text) => {
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

export const loadComments = async () => {
  const response = await fetch('http://localhost:3001/comments');

  if (!response.ok) {
    throw new Error(`댓글을 못 받았어요 — ${describeStatus(response.status)}`);
  }

  return response.json();
};
