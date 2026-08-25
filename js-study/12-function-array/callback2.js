

function simpleFor(arr, callback) {
  for (const item of arr) {
    callback(item);
  }
}

const foodList = ['스시', '짬뽕', '떡볶이', '족발', '파스타'];

simpleFor(foodList, (food) => {
  console.log(food + ' 마니 먹을거에요~');
  console.log('메롱~');
});


console.log('==============');
// 이 배열에서 짝수만 들어있는 새 배열을 가지고 싶어 (원본훼손 금지)
function filterEvenArray(numbers) {
  const newArray = [];
  for (const n of numbers) {
    if (n % 2 === 0) {
      newArray.push(n);
    }
  }
  return newArray;
}

// 이 배열에서 짝수만 들어있는 새 배열을 가지고 싶어 (원본훼손 금지)
function filterEvenOrOddArray(numbers, flag='odd') {
  const newArray = [];
  if (flag === 'even') {
    for (const n of numbers) {
      if (n % 2 === 0) {
        newArray.push(n);
      }
    }
  } else {
    for (const n of numbers) {
      if (n % 2 === 1) {
        newArray.push(n);
      }
    }
  }
  return newArray;
}

// 홀수를 필터링하든 짝수를 필터링하든 3의배수를 필터링하든
// 변하는 건 조건밖에 없구나, 그러면 조건은 니가 보내도록 해라
function filterArray(array, callback) {
  const newArray = [];
  for (const item of array) {
    if (callback(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = filterArray(numbers, (n) => n > 5);
console.log(filteredArray);
console.log(numbers);

const filteredArray2 = filterArray(foodList, food => food.length === 2);
console.log(filteredArray2);



