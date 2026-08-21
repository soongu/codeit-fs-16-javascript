// ~/js-study/media-broken.js
const mediaType = 'image';

switch (mediaType) {
  case 'image':
    console.log('사진 게시물이에요');
    // break 가 없으면 fall through( 흘러내림 )
  case 'video':
    console.log('동영상 게시물이에요');
    break;
  case 'text':
    console.log('글 게시물이에요');
    break;
  default:
    console.log('알 수 없는 종류예요');
}
