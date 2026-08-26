// ~/js-study/optional-crash.js
const posts = [
  {
    username: 'jaehoon',
    location: {
      name: '여의도한강공원',
      city: '서울'
    }
  },
  { username: 'minji' },
  { username: 'yuna', location: { name: '남산서울타워', city: '서울' } },
];


for (const post of posts) {
  console.log(`${post.username} —${post.location?.name ?? '위치 정보 없음'}`);
}
