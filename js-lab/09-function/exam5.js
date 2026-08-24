function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let divisor = 2; divisor < num; divisor++) {
    if (num % divisor === 0) {
      return false;
    }
  }
  // 이 시점 : 이건 소수다
  return true;
}

function countPrimes(min, max) {
  let primeCount = 0;

  for (let num = min; num <= max; num++) {
    if (isPrime(num)) {
      primeCount++;
      console.log(num + '은(는) 소수입니다.');
    }
  }

  return primeCount;
}

console.log('소수 개수: ' + countPrimes(2, 20));
