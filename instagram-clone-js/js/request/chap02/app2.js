// app.js

// ========== 전역 변수 및 상수 ========== //

// 💥 중요: 이 부분에 자신의 Gemini API 키를 입력하세요!
const API_KEY = '';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${API_KEY}`;

// 현재 추가된 재료들을 저장하는 배열 (상태 관리)
let ingredients = [];

// ========== DOM 요소 캐싱 ========== //

// 스크립트 시작 시 필요한 모든 HTML 요소를 미리 찾아 변수에 담아둡니다.
const $ingredientForm = document.querySelector('#ingredient-form');
const $ingredientInput = document.querySelector('#ingredient-input');
const $ingredientList = document.querySelector('#ingredient-list');
const $getRecipeBtn = document.querySelector('#get-recipe-btn');
const $loading = document.querySelector('#loading');
const $recipeOutput = document.querySelector('#recipe-output');

// ========== 핵심 로직 함수 ========== //

/**
 * @description 현재 ingredients 배열의 내용을 바탕으로 재료 태그를 화면에 렌더링합니다.
 */
function renderTags() {
  // 1. 기존 태그들을 모두 지웁니다.
  $ingredientList.innerHTML = '';

  // 2. ingredients 배열을 순회하며 각 재료에 대한 태그를 생성합니다.
  ingredients.forEach((ingredient) => {
    const $tag = document.createElement('div');
    $tag.className = 'tag-item';

    const $tagText = document.createElement('span');
    $tagText.textContent = ingredient;

    const $removeBtn = document.createElement('button');
    $removeBtn.className = 'remove-tag';
    $removeBtn.textContent = 'x';
    // dataset을 사용해 버튼에 어떤 재료를 삭제해야 하는지 정보를 심어둡니다.
    $removeBtn.dataset.ingredient = ingredient;

    $tag.append($tagText);
    $tag.append($removeBtn);
    $ingredientList.append($tag);
  });
}

/**
 * @description Gemini API에게 보낼 프롬프트를 생성합니다.
 * @param {string[]} items - 재료 목록 배열
 * @returns {string} - 완성된 프롬프트 문자열
 */
function generatePrompt(items) {
  // AI가 더 좋은 답변을 생성하도록, 역할을 부여하고 명확하게 지시합니다.
  const prompt = `
당신은 세계 최고의 요리사입니다. 아래의 재료들을 활용해서 만들 수 있는 최고의 요리 레시피를 하나만 추천해주세요.
응답은 반드시 아래에 명시된 JSON 형식에 맞춰서, 다른 부가 설명 없이 JSON 데이터만 반환해야 합니다.

[사용할 재료]
${items}

[출력 JSON 형식]
{
  "recipeName": "요리 이름",
  "introduction": "요리에 대한 한 줄 소개",
  "ingredients": ["재료1", "재료2", "재료3"],
  "instructions": [
    "1단계: 요리 순서 설명",
    "2단계: 요리 순서 설명",
    "3단계: 요리 순서 설명"
  ],
  "tip": "요리를 더 맛있게 만드는 꿀팁"
}
`;
  return prompt;
}

// app.js 파일에 아래 두 함수를 추가하거나 기존 함수를 교체해주세요.

/**
 * @description 파싱된 레시피 데이터 객체를 받아서 화면에 동적으로 HTML 요소를 생성합니다.
 * @param {object} data - 파싱된 레시피 데이터
 */
function renderRecipe(data) {
  // 1. 기존 결과 영역을 비웁니다.
  $recipeOutput.innerHTML = '';

  // 2. 각 데이터에 맞는 HTML 요소를 생성합니다.
  const $recipeName = document.createElement('h2');
  $recipeName.textContent = data.recipeName;

  const $introduction = document.createElement('p');
  $introduction.textContent = data.introduction;
  $introduction.className = 'introduction'; // (선택) CSS 스타일링을 위한 클래스

  const $ingredientsTitle = document.createElement('h3');
  $ingredientsTitle.textContent = '필요한 재료';

  const $ingredientsList = document.createElement('ul');
  data.ingredients.forEach((item) => {
    const $li = document.createElement('li');
    $li.textContent = item;
    $ingredientsList.appendChild($li);
  });

  const $instructionsTitle = document.createElement('h3');
  $instructionsTitle.textContent = '요리 순서';

  const $instructionsList = document.createElement('ol'); // 순서가 중요하므로 ol 태그 사용
  data.instructions.forEach((item) => {
    const $li = document.createElement('li');
    $li.textContent = item;
    $instructionsList.appendChild($li);
  });

  const $tipTitle = document.createElement('h3');
  $tipTitle.textContent = '꿀팁 🍯';

  const $tip = document.createElement('p');
  $tip.textContent = data.tip;

  // 3. 생성된 모든 요소들을 결과 영역에 추가합니다.
  $recipeOutput.append(
    $recipeName,
    $introduction,
    $ingredientsTitle,
    $ingredientsList,
    $instructionsTitle,
    $instructionsList,
    $tipTitle,
    $tip,
  );
}

async function fetchGemini() {
  const prompt = generatePrompt(ingredients);
  const payload = { contents: [{ parts: [{ text: prompt }] }] };
  const requestData = JSON.stringify(payload);

  // ===  여기서부터 === //
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: requestData,
    });

    if (!res.ok) {
      throw new Error(`HTTP error!`);
    }

    const result = await res.json();

    let recipeJsonString = result.candidates[0].content.parts[0].text;

    if (recipeJsonString.startsWith('```')) {
      console.log('마크다운 형식 감지! JSON 추출을 시작합니다.');
      // 첫 번째 '{' 와 마지막 '}' 사이의 문자열만 잘라냅니다.
      const startIndex = recipeJsonString.indexOf('{');
      const endIndex = recipeJsonString.lastIndexOf('}');
      recipeJsonString = recipeJsonString.substring(startIndex, endIndex + 1);
    }

    // 이제 청소된 문자열을 파싱합니다.
    const recipeData = JSON.parse(recipeJsonString);

    // 렌더링 함수에 깨끗한 객체를 전달하여 화면을 그립니다.
    renderRecipe(recipeData);
  } catch (error) {
    console.error('JSON Parsing Error:', error);
    $recipeOutput.textContent =
      '레시피 형식을 분석하는 데 실패했습니다. 다른 재료로 시도해보세요.';
  } finally {
    $loading.classList.add('hidden');
    $recipeOutput.classList.remove('hidden');
  }
}

/**
 * @description fetch API를 사용하여 Gemini API를 호출하고 결과를 처리합니다.
 */
function getRecipeFromAI() {
  if (ingredients.length === 0) {
    alert('재료를 하나 이상 추가해주세요!');
    return;
  }

  $loading.classList.remove('hidden');
  $recipeOutput.innerHTML = ''; // ✨ 이전 결과 텍스트를 비워줍니다.
  $recipeOutput.classList.add('hidden');

  fetchGemini();
}

// ========== 이벤트 리스너 설정 ========== //

// 재료 입력 폼 제출 이벤트
$ingredientForm.addEventListener('submit', (e) => {
  e.preventDefault(); // form의 기본 동작(새로고침)을 막습니다.

  const newIngredient = $ingredientInput.value.trim();

  // 입력값이 있고, 중복된 재료가 아닐 때만 추가
  if (newIngredient && !ingredients.includes(newIngredient)) {
    ingredients.push(newIngredient);
    renderTags(); // 태그 다시 그리기
  }

  $ingredientInput.value = ''; // 입력창 비우기
  $ingredientInput.focus();
});

// 재료 태그 삭제 이벤트 (이벤트 위임)
// $ingredientList는 항상 존재하므로, 여기에 이벤트를 걸고
// 실제 클릭된 대상이 .remove-tag인지 확인합니다.
$ingredientList.addEventListener('click', (e) => {
  if (e.target.closest('.remove-tag')) {
    const ingredientToRemove = e.target.dataset.ingredient;
    // 삭제할 재료를 제외한 나머지 재료들로 새로운 배열을 만듭니다.
    ingredients = ingredients.filter((item) => item !== ingredientToRemove);
    renderTags(); // 태그 다시 그리기
  }
});

// 레시피 추천받기 버튼 클릭 이벤트
$getRecipeBtn.addEventListener('click', getRecipeFromAI);
