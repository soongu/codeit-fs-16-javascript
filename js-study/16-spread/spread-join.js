const morning = ['yuna', 'dahye'];
const evening = ['jaehoon', 'minji'];

const nested = [morning, evening];

console.log(nested);
console.log(nested.length);

const all = [...morning, ...evening];
console.log(all);
console.log(all.length);

// 데이터 추가, 원본의 변화없이
const copyAll = [...all, 'seungwoo'];
// copyAll.push('seungwoo');
console.log('원본: ', all);
console.log('사본: ',copyAll);