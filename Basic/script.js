// Question 1: Sum of all natural numbers from 1 to n

function sumofNaturalNumber(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Another way

function sumofNaturalNumSecondWay(n) {
  let sum = 0;
  sum = (n * (n + 1)) / 2;
  return sum;
}

console.log(sumofNaturalNumber(5)); // 1 + 2 +3+4+5 = 15
console.log(sumofNaturalNumber(10)); // 15 + 6 +7 + 8 + 9 + 10   = 55
console.log(sumofNaturalNumber(7)); // 15 + 6 + 7 = 28
console.log(sumofNaturalNumSecondWay(3)); // 1 + 2 +3 = 6
console.log(sumofNaturalNumSecondWay(4)); // 1 + 2 +3 + 4 = 10

// Question 2: Sum of digits of a number

function sumofDigitOfNumber(digit) {
  let sum = 0;
  while (digit > 0) {
    sum = sum + (digit % 10);
    digit = Math.floor(digit / 10);
  }
  return sum;
}

console.log(sumofDigitOfNumber(1234));
console.log(sumofDigitOfNumber(1543));
console.log(sumofDigitOfNumber(3432));

//Question 3: Count the number of digits of a number

function findNumberOfDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  {
    return count;
  }
}
console.log(findNumberOfDigits(123456));
console.log(findNumberOfDigits(-29344949));
console.log(findNumberOfDigits(-4449303933));

/*

1234

copyNum = 12 reverseNum = 0

lastdi = 2

revernum = 0 * 10 + 4 = 4
revernum = 4 * 10 + 3 = 43
revernum = 43 * 10 + 2 = 432
revernum = 432 * 10 + 1 = 4321

*/

// Fibonacci Number (find single number )

function Fibonacci(n) {
  if (n < 2) {
    return n;
  }
  let prev = 0,
    current = 1,
    next;
  for (i = 2; i <= n; i++) {
    next = prev + current;
    prev = current;
    current = next;
  }
  return next;
}

console.log("Fibonacci ", Fibonacci(7));
0, 1, 1, 2, 3, 5, 8, 13, 21;

// Find Fibonacci Series of

function printFabinacciSeries(n) {
  let first = 0,
    second = 1,
    thirdNumber;

  for (let i = first; i <= n; i++) {
    if (i < 2) {
      console.log(i);
    } else {
      thirdNumber = first + second;
      first = second;
      second = thirdNumber;
      console.log(thirdNumber);
    }
  }
}

printFabinacciSeries(7);

// Find missing number from array
// input nums = [0,3,1]
// missing = 2
// n = 3  =   0,1,2,3

var missingNumber = function (nums) {
  // 1 + 0 + 3 = 4 ; // 0 + 1 + 2+ 3 = 6 => 6 - 4 = 2
  sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return (nums.length * (nums.length + 1)) / 2 - sum;
};

console.log("Missing Number ", missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

let n = 10;

// Count odd number in an  interval  Range

var countOdds = function (low, high) {
  let Oddcount = 0;
  Oddcount = Math.floor((high + 1) / 2) - Math.floor(low / 2);
  return Oddcount;
};

var countEven = function (low, high) {
  let evenCount = 0;
  evenCount = Math.floor(high / 2) - Math.floor((low - 1) / 2);
  return evenCount;
};

console.log(countOdds(3, 7));
console.log(countOdds(8, 10));
console.log(countOdds(1000000000, 1000000000));

console.log(countEven(2, 10));
console.log(countEven(5, 10));

/*
Why It Works:
Math.floor((high + 1) / 2) counts how many odd numbers from 1 to high.

Math.floor(low / 2) counts how many odd numbers from 1 to low - 1.

Their difference gives the number of odd numbers between low and high, inclusive

This optimized version runs in constant time O(1),

*/
