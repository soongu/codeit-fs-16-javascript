// ~/js-study/spread-copy.js
const likeCounts = [2100, 88, 1240, 0, 320];

const bySlice = likeCounts.slice();
const bySpread = [...likeCounts];

console.log(`slice${bySlice.join(', ')}`);
console.log(`spread${bySpread.join(', ')}`);
console.log(bySpread === likeCounts);

const sorted = [...likeCounts].sort((a, b) => b - a);

console.log(`정렬 결과${sorted.join(', ')}`);
console.log(`원본${likeCounts.join(', ')}`);
