// Truncating a string

// The function below takes a string and returns the string truncated to a certain length.
function truncateString(str, num) {
  if (str.length < num) {
    return str;
  } else {
    return str.slice(0, num) + "...";
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2
//   )
// );

// Finders keeper

// The function bellow takes in an array and returns the first element that passes the func
function findElement(arr, func) {
  // firstly loop through an array
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))
//   findElement([1, 2, 3, 4], num => num % 2 === 0);

// Boo who

function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  } else return false;
}

// console.log(booWho(true));

// Title case sentence

function titleCase(str) {
  let strSplit = str.split(" ");
  let num = [];
  for (let i = 0; i < strSplit.length; i++) {
    num[i] = strSplit[i][0].toUpperCase() + strSplit[i].slice(1).toLowerCase();
  }
  return num.join(" ");
}

// console.log(titleCase("I'm a little tea pot"));

// Splice and Slice Array method

// Slice
const cities = ["Lagos", "Abuja", "Ilorin", "Ibadan"];
const newCities = cities.slice(2);
// slice(optional start parameter, optional end parameter)
// console.log(cities)
// console.log(newCities)

// with slice array method the original array is not affected
// and the end parameter is not included in the array

// const numbers = [1,4,2,3,42,5]
// const newNum = numbers.slice(1,4)
// console.log(newNum) //Expected Output: 4,2,3

// Splice

const food = ["pizza", "cake", "salad", "cookie"];

food.splice(1, 1, "amala");
food.splice(0, 0, "Semolina");
// splice(start, optional delete count, optional items to add)
// console.log(food)

food.splice(1, 5);
// console.log(food)

// The Splice() array methods affects the original array
// It can take in three parameters Splice(start, Optional delete, add)

// falsy bounce
function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

const test1 = [7, "ate", "", false, 9];
const test2 = ["a", "b", "c"];
const test3 = [false, null, 0, NaN, undefined, ""];





// palindrome
function palindrome(str) {
  let newStr = str.toLowerCase().replace(/[\W_]/g, "");
  let newStrSplit = newStr.split("");
  let newStrReverse = newStrSplit.reverse();
  let newStrJoin = newStrReverse.join("");
  if (newStr === newStrJoin) {
    return true;
  } else return false;
}

palindrome("eye");
// console.log(palindrome("eye"));





// Function to verify if the values in the second array correspond to the square values of the first array
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    // Checks to see if the square of the first array is in the second array
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    // The below then removes the current element and runs the loop again
    arr2.splice(correctIndex, 1)

  }
  return true
}


// using frequecy pattern

function refacSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequency1 = {}
  let frequency2 = {}
  for (let el in arr1) {
    frequency1[el] = (frequency1[el] || 0) + 1
  }
  for (let el in arr2) {
    frequency2[el] = (frequency2[el] || 0) + 1
  }
  console.log(frequency1)
  console.log(frequency2)

  for (let key in frequency1) {
    if (!(key ** 2 in frequency2)) {
      return false
    }
    if (frequency2[key ** 2] !== frequency1[key]) {
      return false
    }
  }
  return true
}

// console.log(same([2,2,3], [4,9,4]))
// console.log(refacSame([2,2,3], [4,9,4]))



function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// console.log(validAnagram('anagrams', 'nagaramm'))



// Multiple Pointers 
// sumZero

// simple approach
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return ([arr[i], arr[j]])
      }
    }
  }
}
// console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3,4]))
// Time complexity of O(N^2)


function sumZero2(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}






// Solving ceaser's cipher
function rot13(str) {
  let encoded = ""
  let firstSet = "abcdefghijklm".toUpperCase()
  let secondSet = "nopqrstuvwxyz".toUpperCase()

  for (let i = 0; i < str.length; i++) {
    let letterToDecode = str[i]

    if (firstSet.indexOf(letterToDecode) >= 0) {
      encoded += secondSet[firstSet.indexOf(letterToDecode)]
    } else if (secondSet.indexOf(letterToDecode) >= 0) {
      encoded += firstSet[secondSet.indexOf(letterToDecode)]
    } else {
      encoded += letterToDecode
    }
  }
  return encoded
}

// console.log(rot13("SERR PBQR PNZC"))
// console.log(rot13("SERR YBIR?"))


// Telephone Number validator


// correct format
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

function telephoneCheck(str) {
  let hypNum = []
  for (let i = 0; i < str.length; i++) {

  }
  if (str.indexOf("-") >= 0) hypNum.push(str.indexOf("-"))
  return hypNum
}

// console.log(telephoneCheck("555-555-5555"));
// console.log(telephoneCheck("2 555-555-5555"));
// console.log(telephoneCheck("1 555-555-5555"));


// Sliding window pattern

// write a function which accepts an array or integers and a number called n.
// The function should return the maximum sum of n consecutive elements in the array


// naive approach
function maxSubArraySum(arr, n) {
  if (n > arr.length) {
    return null
  }
  let max = -Infinity
  for (let i = 0; i < arr.length - n + 1; i++) {
    temp = 0
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}

// let result = maxSubArraySum([1,2,3,4], 2)
// console.log(result)

// sliding window approach

const maxSubArraySum2 = (arr, num) => {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum
}

// let result2 = maxSubArraySum2([1,2,3,4], 2)
// console.log(result2)


// recursion
// first recursive function

function printNums(num) {
  if (num <= 0) {
    console.log("All done ")
    return
  }
  console.log(num)
  num--
  printNums(num)
}

// let result = printNums(3)
// console.log(result)

// second recursive function

function sumRange(num) {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}




function convertToRoman(num) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var str = '';

  for (var i of Object.keys(roman)) {
    var q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }

  return str;
}

// let result = convertToRoman(40)
// console.log(result)


function romanize(num) {
  let lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let roman = ''
  let i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i
      num -= lookup[i]
    }
  }
  return roman;
}

// break down

function breakDown(num) {
  let lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let i;
  let roman = ""
  for (i in lookup) {
    console.log(lookup[i])
    while (num >= lookup[i]) {
      roman = roman + i
    }
  }
}

console.log(breakDown())




// POWER SOLUTION
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
// FACTORIAL SOLUTION
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
// RECURSIVE RANGE SOLUTION
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}
// FIBONACCI SOLUTION
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}