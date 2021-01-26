/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n === 0 || n === 1) return 0;

  const primeArray = [];
  for (let i = 2; i <= n - 1; i++) {
    primeArray.push(i);
  }
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    for (let j = 0; j <= primeArray.length; j++) {
      if (primeArray[j] % i === 0 && primeArray[j] !== i) {
        primeArray.splice(j, 1);
      }
    }
  }

  return primeArray.length;
};

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countPrimes = function (n) {
//   if (n === 0 || n === 1) return 0;

//   const primeMap = {};
//   // for (let i = 2; i <= n - 1; i++) {
//   //   primeArray.push(i);
//   // }
//   //console.log(primeArray);
//   const sqrt = Math.sqrt(n);
//   for (let i = 2; i <= sqrt; i++) {
//     for (let j = 2; j < n; j++) {
//       if (primeMap[j] === undefined) {
//         primeMap[j] = 0;
//       }
//       if (j % i === 0 && i!==j) {
//         primeMap[j]++;
//       }
//     }
//   }
//   let result = 0;
//   for(let i = 0; i<= n;i++){
//     if(primeMap[i]===0) result++;
//   }

//   return result;
// };

const isPrime = (n) => {
  // Check if number is less than
  // equal to 1
  if (n <= 1) return false;
  // Check if number is 2
  else if (n == 2) return true;
  // Check if n is a multiple of 2
  else if (n % 2 == 0) return false;

  // If not, then just check the odds
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) return false;
  }
  return true;
};

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countPrimes = function (n) {
//   let result = 0;
//   for (let i = 1; i < n; i++) {
//     if (isPrime(i)) {
//       result++;
//     }
//   }
//   return result;
// };

console.time('test');
console.log(`Answer: ${countPrimes(1000)}`);
console.timeEnd('test');
