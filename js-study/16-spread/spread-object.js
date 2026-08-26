// ~/js-study/spread-object.js
const post = { id: 3, username: 'jaehoon', likes: 1240 };
const copy = { ...post };

console.log(`사본${copy.username} · 좋아요${copy.likes}개`);
console.log(copy === post);

copy.likes = 9999;

console.log(`사본 좋아요${copy.likes}개`);
console.log(`원본 좋아요${post.likes}개`);
