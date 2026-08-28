
// 1. 앞 실습의 코드 가져오기
const bio = document.querySelector('section:nth-of-type(1) p');

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

bio.after(form);

document.querySelector('#intro-box').value = bio.textContent;

const textarea = form.querySelector('textarea');
const label = form.querySelector('label');
const introBoxCount = [...document.querySelectorAll('#intro-box')].length;


//2. 폼에 서브밋 이벤트리스너 걸기
form.addEventListener('submit', event => { 
  event.preventDefault();

  // 3. 입력값 읽고 앞뒤공백 자르기
  const textarea = form.querySelector('textarea');
  const newBioText = textarea.value.trim();

  //4. 문자가 빈 문자열이면 종료
  if (newBioText === '') {
    console.log('빈 칸이라서 그대로 뒀어요');
    return;
  }

  // 5. 아니면 p태그의 값을 지금 입력한 값으로 바꾸기
  bio.textContent = newBioText;
  console.log(`소개를 바꿨어요 - ${newBioText}`);

  // 추가: 입력이 끝나면 반영된 입력창 비우기
  textarea.value = '';
});

// 6. 파일 맨 아래에서 처음 소개 찍기
console.log(`처음 소개 - ${bio.textContent}`);