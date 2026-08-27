

const [firstSect, secondSect]
  = [...document.querySelectorAll('section')];

const likeListItem = document.createElement('li');
likeListItem.textContent = '좋아요 4,120';

const statisticsUl = firstSect.querySelector('ul');
statisticsUl.append(likeListItem);

const [postLi, followerLi, followingLi, likeLi]
  = [...statisticsUl.children];

console.log(
  `통계 ${statisticsUl.children.length}줄: ` +
    [...statisticsUl.children].map((li) => li.textContent).join(' · '),
);

const imageSectionUl = secondSect.querySelector('ul');

// // 지우기 전 게시물 수
const beforePostCount = imageSectionUl.children.length;

imageSectionUl.children[0].remove();

const afterPostCount = imageSectionUl.children.length;

console.log(`게시물 ${beforePostCount}장 -> ${afterPostCount}장`);

