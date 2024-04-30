// 1. Do the below programs in anonymous function & IIFE
// h. Rotate an array by k times

var arr = [1, 3, 5, 7, 9, 11];
var k = 3;

//Anonymous Function

var rotate = function () {
  var temp = [];

  for (i = 0, j = arr.length - k; i < arr.length; i++) {
    if (j == arr.length) j = 0;
    if (j < arr.length) {
      temp[i] = arr[j];
      j++;
    } else {
      j = 0;
    }
  }
  console.log(temp);
};
rotate();

//IIFE

(function (arr) {
  var temp = [];

  for (i = 0, j = arr.length - k; i < arr.length; i++) {
    if (j == arr.length) j = 0;
    if (j < arr.length) {
      temp[i] = arr[j];
      j++;
    } else {
      j = 0;
    }
  }
  console.log(temp);
})(arr);
