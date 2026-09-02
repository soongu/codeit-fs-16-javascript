
// ===== DOM 캐싱 ===== //
const pokeContainer = document.querySelector('.pokemon-container');


// ===== 전역 변수 선언 =====//
const url = 'https://pokeapi.co/api/v2/pokemon';

// ===== 함수 정의 ===== //

// 포켓몬 목록을 화면에 그리는 함수
const renderPokemonList = async (pokemonList) => {
  for (const pokemon of pokemonList) {

    // 각 포켓몬의 상세정보를 다시 서버에 재요청
    const res = await fetch(pokemon.url);
    const pokemonData = await res.json();
    const imgSrc = pokemonData.sprites.front_default;

    const newDiv = document.createElement('div');
    newDiv.classList.add('pokemon');
    newDiv.innerHTML = `
      <img src="${imgSrc}" alt="${pokemon.name}">
      <h3>${pokemon.name}</h3>
    `;

    pokeContainer.append(newDiv);
  }
};

// 포켓몬 목록을 서버에서 불러오는 함수
async function getPokemon() {

  const res = await fetch(url);
  const { count, results } = await res.json();

  // 화면에 포켓몬 그리기
  renderPokemonList(results);
}

// ===== 이벤트 핸들러 바인딩 ===== //


// ===== 초기 실행 코드 ===== //
getPokemon();