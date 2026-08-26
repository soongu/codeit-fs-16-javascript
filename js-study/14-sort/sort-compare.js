

// ~/js-study/sort-compare.js
const likeCounts = [2100, 88, 1240, 0, 320];
// 과거의 방식: 미리 복사를 떠두고
const copies = likeCounts.slice();

const ascending = likeCounts.toSorted((a, b) => a - b);
console.log(ascending);

const descending = likeCounts.toSorted((a, b) => b - a);
console.log(descending);

console.log(likeCounts);
