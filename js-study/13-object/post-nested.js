const post = {
  username: 'yuna',
  caption: '새벽 러닝 🌙',
  likes: 2100,
  hashtags: ['새벽러닝', '한강', '러닝스타그램'],
  hasMoney: true,
  images: {
    src: '/images/running.jpg',
    alt: '달리는 사진',
    size: '3MB'
  },
  delete: () => console.log('사진이 삭제됩니다.')
};

console.log(post.hashtags.push('빨리달리기'));
console.log(post);
console.log(post.delete());
console.log(post.hashtags.filter(tag => tag.length === 2))