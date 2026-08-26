
const allLiTags = [...document.querySelectorAll('li')];
console.log('화면 전체 LI 태그 개수: ', allLiTags.length);

const [firstSection, secondSection]
  = [...document.querySelectorAll('section')];

console.log('2번째 section안의 LI 태그 개수:',
  secondSection.querySelectorAll('li').length);

const postGrid = document.querySelector('.post-grid');
console.log('postGrid: ', postGrid);

const postGridList = document.querySelectorAll('.post-grid');
console.log('postGridList: ', postGridList.length);

