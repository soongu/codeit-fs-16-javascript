// ~/js-study/dangling.js
const isLoggedIn = false;
const isFollowing = true;

if (isLoggedIn)
  if (isFollowing) console.log('팔로우 중이에요');
  else console.log('로그인이 필요해요');


function foo() {
  if (true) {
    return;
  }
  let a = 10;
}
