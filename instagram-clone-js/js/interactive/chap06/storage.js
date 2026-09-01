const FEED_KEY = 'feed'; // 상수

const saveFeed = (list) => {
  localStorage.setItem(FEED_KEY, JSON.stringify(list));
};
const loadFeed = () => {
  const text = localStorage.getItem(FEED_KEY);

  if (text === null) {
    return null;
  }

  return JSON.parse(text);
};