
let result = 10;
setTimeout(() => { 
  console.log('물을 끓였어요.');
  setTimeout(() => {
    console.log('면을 넣었어요.');
    setTimeout(() => {
      console.log('스프를 넣었어요.');
      result = 100;
    }, 300);
  }, 300);
}, 300);

console.log('result:', result);

setTimeout(() => {
  console.log('물을 끓였어요.');
}, 300);
setTimeout(() => {
  console.log('면을 넣었어요.');
}, 300);
setTimeout(() => {
  console.log('스프를 넣었어요.');
}, 300);