const isLoggedIn = true;
const isPrivate = true;
const isFollowing = false;

console.log(isLoggedIn && (!isPrivate || isFollowing));

console.log(true || (false && false));
