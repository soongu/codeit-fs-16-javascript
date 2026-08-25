

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



