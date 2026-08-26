const post = { username: 'dahye', caption: '밤 산책', likes: 88 };

const tagCounts = { 러닝: 3, 노을: 2, 한강: 2 };

const { likes, username, caption } = post;
console.log(`${username}, 좋아요 ${likes}개
  ${caption}`);


for (const key in tagCounts) {
  const value = tagCounts[key];
  console.log(`#${key} ${value}번`);
}

// for (const [key, value] of Object.entries(tagCounts)) {
//   console.log(`#${key} ${value}번`);
// }
