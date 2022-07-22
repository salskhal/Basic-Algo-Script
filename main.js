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
  let num = []
  for(let i = 0; i < strSplit.length; i++){
      num[i] = strSplit[i][0].toUpperCase() + strSplit[i].slice(1).toLowerCase()
  }
  return num.join(" ")
}

console.log(titleCase("I'm a little tea pot"));
