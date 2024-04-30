// 1. Do the below programs in anonymous function & IIFE
// g. Remove duplicates from an array

var arr = [1, 1, 2, 3, 4, 2, 5, 3, 4, 4, 3, 2, 6, 2, 1];

arr.sort(sortNumbers);

function sortNumbers(a, b) {
  return a - b;
}

//Anonymous Function

var removeDuplicate = function () {
  var temp = [];

  for (i = 0, j = 1; i, j <= arr.length; i++, j++) {
    if (arr[i] != arr[j]) {
      temp.push(arr[i]);
    }
  }
  console.log(temp);
};

removeDuplicate();

//IIFE

(function (arr) {
  var temp = [];

  for (i = 0, j = 1; i, j <= arr.length; i++, j++) {
    if (arr[i] != arr[j]) {
      temp.push(arr[i]);
    }
  }
  console.log(temp);
})(arr);
