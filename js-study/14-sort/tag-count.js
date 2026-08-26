// ~/js-study/tag-count.js
const tags = ['한강', '노을', '한강', '러닝', '한강', '노을'];


const counts = { };


for (const tag of tags) {
  counts[tag] = (counts[tag] ?? 0) + 1;
}

// for (const tag of tags) {
//   if (tag in counts) { // 이미 이 해시태그가 객체안에 저장되어있다면
//     counts[tag]++; // 해당 해시태그의 카운트를 한개올린다.
//   } else { // 이 해시태그가 처음 등장한 해시태그면
//     counts[tag] = 1; 
//   }
// }

console.log(counts);

// for (const pair of Object.entries(counts)) {
//   console.log('#' + pair[0] + ' ' + pair[1] + '번');
// }
