
// 1. 소개 p태그 찾기
const bio = document.querySelector('section:nth-of-type(1) p');

// 2. form태그를 만들고 그안에 tex"tarea와 button 넣기
// 3. 라벨과 텍스트영역 id로 연결
const form = document.createElement('form');
form.style.width = '50%';
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '10px';

form.innerHTML = `
  <label for="intro-box">소개</label>
  <textarea id="intro-box" rows="5"></textarea>
  <button type="submit" class="btn-primary">제출</button>
`;

// 4. 만든 폼을 p태그 뒤에 붙이기
bio.after(form);

// 5. 입력 칸에 지금 소개 글 미리담기
document.querySelector('#intro-box').value = bio.textContent;

// 6. 출력
const textarea = form.querySelector('textarea');
const label = form.querySelector('label');
console.log(`입력칸 이름 ${textarea.getAttribute('id')}`);
console.log(`라벨이 가리키는 이름 ${label.getAttribute('for')}`);
const introBoxCount = [...document.querySelectorAll('#intro-box')].length;
console.log(`페이지에 그 이름을 가진 요소 ${introBoxCount}개`);

