localStorage.setItem('number', 25);
localStorage.setItem('boolean', true);
localStorage.setItem('array', [1, 2, 3]);
localStorage.setItem('object', { name: '재훈' });
localStorage.setItem('nothing', null);

const n = Number(localStorage.getItem('number'));
console.log(n + 10);