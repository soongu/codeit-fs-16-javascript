
const post = { id: 3, username: 'jaehoon', likes: 1240 };

const reset = { ...post, likes: 0 };
const wrong = { likes: 0, ...post };

console.log(reset);
console.log(post);
