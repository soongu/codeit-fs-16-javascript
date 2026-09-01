// instagram-clone-js/js/queue.js
console.log('1. 지금 바로');

setTimeout(() => console.log('5. 타이머 줄에서'), 0);

Promise.resolve().then(() => console.log('3. 약속 줄에서'));

setTimeout(() => console.log('6. 타이머 줄에서'), 0);

Promise.resolve().then(() => console.log('4. 약속 줄에서'));

console.log('2. 지금 바로');
