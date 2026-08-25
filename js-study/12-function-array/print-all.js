// ~/js-study/print-all.js
const dailyLikes = (day) => {
  let sum = 0;

  for (let post = 1; post <= 3; post++) {
    sum += day * 12 + post * 5;
  }

  return sum;
};

const likeLine = (day) => day + '일차 좋아요 ' + dailyLikes(day) + '개';

const printAll = (list, makeLine) => {
  for (const item of list) {
    console.log(makeLine(item));
  }
};


function foo(param) {
  console.log(param);
  param();
  console.log(typeof param);
}

function bar() {
  console.log('하하호호');
  return 10;
}

foo(() => { console.log("zizizi") }); 
