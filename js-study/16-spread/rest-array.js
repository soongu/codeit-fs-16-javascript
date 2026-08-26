// ~/js-study/rest-array.js
const ranked = ['yuna', 'jaehoon', 'dahye', 'minji', 'seungwoo'];

const [first, second, ...others] = ranked;


console.log(`1위${first}`);
console.log(`2위${second}`);
console.log(`나머지${others.length}명`);
console.log(others.map((name) => `${name} 님`).join(' · '));
console.log(`원본${ranked.length}명`);
