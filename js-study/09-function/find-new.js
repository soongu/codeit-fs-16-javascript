// ~/js-study/find-old.js
function findHotPost() {
  // 일자가 1일차부터 3일차까지 반복 진행
  for (let day = 1; day <= 3; day++) {
    // 일차별로 게시물이 1번부터 5번까지 진행
    for (let post = 1; post <= 5; post++) {
      // 게시물 1개당 좋아요수를 집계
      let likes = day * 20 + post * 15;
      if (likes >= 100) {
        // 게시물 1개당 좋아요가 100개 이상이면
        // answer에는 좋아요가 100개 이상인 일자와 게시물번호를 저장
        return day + '일차 ' + post + '번';
      }
    }
  } // 바깥쪽 for문이 끝나는 지점
  return '못 찾았어요';
}

console.log('처음 100개를 넘긴 게시물: ' + findHotPost());
