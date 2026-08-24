
function printGugudan(dan) {

  for (let i = 1; i <= 9; i++) {
    let result = dan * i;

    if (result % 2 === 0) {
      console.log(dan + ' x ' + i + ' = ' + result + ' (짝수)');
    } else {
      console.log(dan + ' x ' + i + ' = ' + result + ' (홀수)');
    }
  }
}


printGugudan(7);
