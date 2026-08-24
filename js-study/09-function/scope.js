

// ~/js-study/scope.js
function makeReport() {
  const totalPosts = 21;
  console.log('게시물 ' + totalPosts + '개');
  return totalPosts;
}

const total = makeReport();
console.log('요약: 게시물 ' + total + '개');
