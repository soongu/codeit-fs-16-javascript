// 1. 사진 5장을 담을 데이터 배열 만들기
const postGridImages = [
  { image: 'https://picsum.photos/seed/post1/300/300', alt: '첫번째 이미지' },
  { image: 'https://picsum.photos/seed/post2/300/300', alt: '두번째 이미지' },
  { image: 'https://picsum.photos/seed/post3/300/300', alt: '세번째 이미지' },
  { image: 'https://picsum.photos/seed/post4/300/300', alt: '네번째 이미지' },
  { image: 'https://picsum.photos/seed/post5/300/300', alt: '다섯번째 이미지' },
  { image: 'https://picsum.photos/seed/post6/300/300', alt: '여섯번째 이미지' },
];

// console.log(postGridImages);

// 2. 둘째 섹션의 ul 찾아 담기
const imageSectionUl = document
  .querySelectorAll('section')[1]
  .querySelector('ul');


// 3. 지우기 전 장 수 찍기
const imageListItems = [...imageSectionUl.children];
console.log(`지우기 전 ${imageListItems.length}장`);

// 4. 안에 있는 li 지우기, 그리고 장 수 찍기
for (const listItem of imageListItems) {
  listItem.remove();
}
console.log(`지운 뒤 ${imageSectionUl.children.length}장`);

// 5. 데이터 배열을 화면에 그리기
// li태그를 1개 만드는 함수 정의
const createImageCard = ({ image, alt }) => { 
  const imageListItem = document.createElement('li');
  
  const imageTag = document.createElement('img');
  imageTag.setAttribute('src', image);
  imageTag.setAttribute('alt', alt);

  imageListItem.append(imageTag);

  return imageListItem;
};

// ul에 li 붙이기
for (const image of postGridImages) {
  imageSectionUl.append(createImageCard(image));
}

// 6. 다시 그린 후 장 수와 모든 사진의 alt 출력
console.log(`다시 그린 뒤 ${imageSectionUl.children.length}장`);

console.log(
  [...imageSectionUl.children]
    .map((li) => li.querySelector('img').getAttribute('alt'))
    .join(' / ')
);