const users = [
  {
    username: 'yuna',
    profile: {
      bio: '새벽에 뜁니다.',
      link: {
        url: 'yuna.run',
        label: '러닝 기록'
      }
    },
  },
  {
    username: 'dahye',
    profile: {
      bio: '밤 산책러'
    }
  },
  {
    username: 'minji'
  }
];

for (const user of users) {
  console.log(
    `${user.username} - ${user.profile?.bio ?? '(소개 없음)'} / ${user.profile?.link?.url ?? '(링크 없음)'} / 라벨 ${user.profile?.link?.label ? user.profile?.link?.label.length + '자' : '없음'}`,
  );
}