// ~/js-study/follow-button.js
const isLoggedIn = false;
const isFollowing = false;

if (isLoggedIn) {
  if (isFollowing) {
    console.log('[중첩] 팔로우 중이에요');
  } else {
    console.log('[중첩] 팔로우 버튼을 보여줘요');
  }
}

if (isLoggedIn && isFollowing) {
  console.log('[&&] 팔로우 중이에요');
} else {
  console.log('[&&] 팔로우 버튼을 보여줘요');
}
