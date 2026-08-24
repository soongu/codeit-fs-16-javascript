// ~/js-study/find-old.js
let found = false; // 반복문을 중단시킬 플래그
let answer = '못 찾았어요'; // answer에는 좋아요가 100개 이상인 일자와 게시물번호를 저장

// 일자가 1일차부터 3일차까지 반복 진행
for (let day = 1; day <= 3; day++) {
  // 일차별로 게시물이 1번부터 5번까지 진행
  for (let post = 1; post <= 5; post++) {
    // 게시물 1개당 좋아요수를 집계
    let likes = day * 20 + post * 15;
    if (likes >= 100) { // 게시물 1개당 좋아요가 100개 이상이면

      // answer에는 좋아요가 100개 이상인 일자와 게시물번호를 저장
      answer = day + '일차 ' + post + '번';
      // 찾았다는 증거를 true로 설정
      found = true; 
      break; // 반복문을 중단
    }
  }

  if (found) {
    break;
  }
}

console.log('처음 100개를 넘긴 게시물: ' + answer);
