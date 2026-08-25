

function simpleFor(arr, callback) {
  for (const item of arr) {
    callback(item);
  }
}

const foodList = ['스시', '짬뽕', '족발', '파스타'];

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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterEvenArray(numbers);
console.log(evenNumbers);
console.log(numbers);

