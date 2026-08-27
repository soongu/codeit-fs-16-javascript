
// 1. 두번째 섹션에서 img태그들 수집
const sectionImages
  = [...document.querySelectorAll('main section:nth-of-type(2) li img')];

// console.log(sectionImages);

// 2. 반복문으로 이미지 3장에 전부 이벤트 리스너 걸기
sectionImages.forEach((imgTag, idx) => {
  imgTag.addEventListener('click', () => { 
    // 3. 해당 사진이 몇번째인지와 alt값 출력
    console.log(`${idx + 1}번째 사진 · ${imgTag.getAttribute('alt')}`);
  });
});

console.log(idx);

// 4. 몇장에 붙었는지 로그
console.log(`사진 ${sectionImages.length}장에 리스너를 붙였어요.`);