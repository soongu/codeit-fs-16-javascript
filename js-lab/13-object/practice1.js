const profile = {
  username: 'seungwoo',
  bio: '3년 만에 다시 뜁니다',
  followers: 320
};

console.log(profile);

console.log(profile.username);
profile.followers++;
console.log(`${profile.username} 님 , 팔로워 ${profile.followers}명`);

profile.bio += ', 러닝 5년차';
console.log(profile.bio);