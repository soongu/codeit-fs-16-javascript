// ===== 상수 선언 ==== //
const DISABLED = 'disabled';

const typeImages = [
  {
    name: 'normal',
    url: 'https://i.namu.wiki/i/OzwwiCpLEnz-zMSYWxCLyvZ90yPuyyaURmeJFU3aX4C7BEiAWTtX33jEBSwyVyt7KLpGwvkbC-HrPdtNomOuSw.svg',
  },
  {
    name: 'fighting',
    url: 'https://i.namu.wiki/i/w1xrIispBygNlATHMZo5-ZEFjWFAgJ6-oYTWbirc92co2jYPthtgSLS3AIadhu6vay0V5qtK5wyGWgQzuIQ84Q.svg',
  },
  {
    name: 'flying',
    url: 'https://i.namu.wiki/i/CQLOW9IDPvfxuIIppTGYBa3y2TsEuk5FybazRwqeuaFgF9FNHRZHUkWa8tsjL7B2FFdD_9MatdgQQyH_KBKa4w.svg',
  },
  {
    name: 'poison',
    url: 'https://i.namu.wiki/i/c87iqpANL6ODCg9-z4pNORiIpv5_CcvQZY83s-5vmNBdk0EvJBhk0An4iEqCagxcpLgETPlIFM6MWHpJ49wNWQ.svg',
  },
  {
    name: 'ground',
    url: 'https://i.namu.wiki/i/_1mjTC4i4eo1U8dXQVfn76wJ_8c6XZ8YBR712UelnIIaeDYNQx4sZ0GM9sw9zO0-QZwDhfcYPgA3bCEDVOQdhA.svg',
  },
  {
    name: 'rock',
    url: 'https://i.namu.wiki/i/8m5bA5hAR8wz07X0yHh3goxFP4Hq9fTqVnN1fGUa1SjptLefdMWZrCnxEbXpMuTGVGCyZ56bkHy2-K1qL987eA.svg',
  },
  {
    name: 'bug',
    url: 'https://i.namu.wiki/i/jHoVDx4jP_ibO6b4MYWC4uodKB7nBGRbUcMApoYKjPEt3ZP_rYzy__nAlUTRiR7v3Ug0WEo-m6XekRPGbopiSw.svg',
  },
  {
    name: 'ghost',
    url: 'https://i.namu.wiki/i/mU0K2HVDEo3NWXUwJkDAdxw852nUBuUun8DJmvaRNrycYIUa9P7i3QrLvpvP9kr2GoH4zE6GeRRvUoDKfXrb2g.svg',
  },
  {
    name: 'steel',
    url: 'https://i.namu.wiki/i/6COggx_E1MEEOQY57cb18Wbi2oGbp0jZn7BYfh72rQ8K13X5-93sCohZbpxqyuzYypMGsCWOpjzdLUrQqN3UwA.svg',
  },
  {
    name: 'fire',
    url: 'https://i.namu.wiki/i/3Rd_IL-T3OpLiZf3NFjqGmHcLi8TVyhXc4J7aiPzBUkDLgGiD3tziNdNKzSLHqdqHbYAAPfUHOw8sY2UTp3foA.svg',
  },
  {
    name: 'water',
    url: 'https://i.namu.wiki/i/aIjVcS_Rifmg45S1epta4n9kfoYodbMVvFEenybo5Xx3NNWGBUDAK5951yYryu6X8gE7zvFeDyfe8-LFFZ0nwA.svg',
  },
  {
    name: 'grass',
    url: 'https://i.namu.wiki/i/vl2AcEdMbkTBnGaxPWdhEhDO75sn_o8oZp_2BYyzjtnUFQWCFYk5WjVy1V2ePPzC2MQKsORU6jhiM2zJnMPDjw.svg',
  },
  {
    name: 'electric',
    url: 'https://i.namu.wiki/i/aIGMuCdw1p7AG4NDGxWfHvcu_QJgHwiXhhx-5OYTL0tQGDWkNOZcS77z_lfd-Qr9aD3gKGJCNCruw-9HBJ0NXkOyrkluoZGfTjxyWpbsNwnJxPd1ma4ByWN6Ur3Y4Q0CrqsJ-xTj3eKAzYgF-pJrwA.svg',
  },
  {
    name: 'psychic',
    url: 'https://i.namu.wiki/i/0Gd4OOht1-sgSyAyTGTAztx9X0xviiokovnUkok2F_3wGTiO81Aw66KeTf9-4MVFbxn7IbhJY1Ra8UrUWJFPOQ.svg',
  },
  {
    name: 'ice',
    url: 'https://i.namu.wiki/i/mW1sfdpreP-IWq12WE8AnamlNHAU-kCLeUODy6bAB-mgpzDqYMtcjiw-OJRzjSEor-eVc7qFG54f2WGoEOjP_A.svg',
  },
  {
    name: 'dragon',
    url: 'https://i.namu.wiki/i/WmIOiZtmmBqIvahkVaOI2C5Nmn484bhPOO118dllYEpBh2Vqglzg5647g3mjrLtoG5qRlpTcMpI0spOkIpTSdw.svg',
  },
  {
    name: 'dark',
    url: 'https://i.namu.wiki/i/eDyMcr395uKyNxT5v3b1fAdwZTuxY2c1GlRKT2gW4OmrKNV6JBvP8-OrOw9_sLWNF7gP-pm-7balFwZi6crx5A.svg',
  },
  {
    name: 'fairy',
    url: 'https://i.namu.wiki/i/jI-idDQjmCCHxnvdcvWKLl5Yj428W4PguwleARun7RqjY5Me7ij_W8TB3GKYLKZSX68ccACnmG_DFXBJEbXvNw.svg',
  },
  {
    name: 'stellar',
    url: 'https://i.namu.wiki/i/hf2gRypYf0w0oCk6p9LVr0E1rWjIMVQTdAMZht3g8A6ecvR7v8hyoZY3JXP-Sx-1nHSY7biJXZsAMdxrayNOyg.webp',
  },
];

// ===== DOM 캐싱 ===== //
const pokeContainer = document.querySelector('.pokemon-container');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const loadingSpinner = document.querySelector('#loading');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const modalCloseBtn = document.querySelector('#closeModal');

const modalContent = document.querySelector('#modal-content');
const modalTitle = document.querySelector('#modalTitle');
const modalImage = document.querySelector('#modalImage');
const modalDetails = document.querySelector('#modalDetails');
const modalTypes = document.querySelector('#modalTypes');

const modalSkeleton = document.querySelector('#modal-skeleton');

// ===== 전역 변수 선언 =====//
const url = 'https://pokeapi.co/api/v2/pokemon';

let offset = 0; // 시작 위치
let limit = 45; // 가져올 개수

let pokeCount; // 총 포켓몬 수

// 로딩 스피너의 토글 플래그
let isLoading = false;

// ===== 함수 정의 ===== //

// 포켓몬 목록을 화면에 그리는 함수
const renderPokemonList = async (pokemonList) => {

  pokeContainer.innerHTML = '';

  const detailList = await Promise.all(
    pokemonList.map(pokeData =>
      fetch(pokeData.url).then(res => res.json()))
  );


  for (const pokemon of detailList) {

    // 각 포켓몬의 상세정보를 다시 서버에 재요청
    const imgSrc = pokemon.sprites.front_default;

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


  // 로딩 스피너를 활성화
  isLoading = true;
  loadingSpinner.style.opacity = '1';

  const res = await fetch(`${url}/?offset=${offset}&limit=${limit}`);
  const { count, results } = await res.json();
  pokeCount = count;

  // 화면에 포켓몬 그리기
  renderPokemonList(results);

  isLoading = false;
  loadingSpinner.style.opacity = '0';
}

// 모달 열기 함수
const openModal = async (pokemonName) => {
  modal.style.display = 'flex';
  overlay.style.display = 'flex';
  // 모달이 열릴 때 뒷배경 스크롤링 방지
  document.body.style.overflow = 'hidden';

  // 명시적으로 스켈레톤을 끄고 컨텐츠를 렌더링
  modalSkeleton.style.display = 'none';
  modalContent.style.display = 'flex';

  // 지금 클릭한 포켓몬이 누구?
  // console.log('클릭한 포켓몬: ', pokemonName);
  // 포켓몬 상세 데이터를 fetching
  const res = await fetch(`${url}/${pokemonName}`);
  const pokemonData = await res.json();
  const { name, height, weight, base_experience, types, sprites } = pokemonData;
  
  // 포켓몬 데이터를 렌더링
  modalTitle.textContent = name;
  modalImage.src = sprites.front_default;
  modalDetails.textContent = `키: ${height} | 무게: ${weight} | 경험치: ${base_experience}`;

  // 타입 데이터 삽입
  const typeNames = types.map(t => t.type.name);

  modalTypes.innerHTML = '';
  for (const typeName of typeNames) {
    const liTag = document.createElement('li');

    // 이 타입명에 해당하는 아이콘 url을 탐색하기
    const typeImageUrl = typeImages.find(ti => ti.name === typeName)?.url;

    liTag.innerHTML = `<img src="${typeImageUrl}">`;

    modalTypes.append(liTag);
  }

};

// 모달 닫기 함수
const closeModal = () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
  // 모달이 열릴 때 뒷배경 스크롤링 방지 해제
  document.body.style.overflow = '';
};

// ===== 이벤트 핸들러 바인딩 ===== //

// 모달 닫기 바인딩
modalCloseBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 다음 버튼 클릭시
nextBtn.addEventListener('click', event => { 

  if (isLoading) return;

  // 이전버튼을 활성화
  prevBtn.removeAttribute(DISABLED);
  // offset을 조정
  offset += limit;
  if (offset > pokeCount) {
    pokeContainer.textContent = '다음 포켓몬 데이터가 없습니다.';
    nextBtn.setAttribute(DISABLED, true);
    return;
  }
  getPokemon();
});

// 이전 버튼 클릭시
prevBtn.addEventListener('click', event => { 

  if (isLoading) return;

  nextBtn.removeAttribute(DISABLED);
  // offset을 조정
  offset -= limit;
  if (offset < 0) {
    offset = 0;
    pokeContainer.textContent = '이전 포켓몬 데이터가 없습니다.';
    prevBtn.setAttribute(DISABLED, true);
    return;
  }
  getPokemon();
});

// 포켓몬을 클릭하면 실행할 이벤트
pokeContainer.addEventListener('click', event => { 
  const pokeDiv = event.target.closest('.pokemon');

  if (!pokeDiv) return;

  // 모달을 열어주기
  openModal(pokeDiv.querySelector('img').alt);
});


// ===== 초기 실행 코드 ===== //
getPokemon();