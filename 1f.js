// 1. Do the below programs in anonymous function & IIFE
// f. Return median of two sorted arrays of the same size.

var arr1 = [1, 3, 6];
var arr2 = [2, 8, 12];

var temp = [...arr1, ...arr2];
var len = temp.length;

var res = 0;

temp.sort(sortNumbers);

function sortNumbers(a, b) {
  return a - b;
}

//Anonymous Function

var median = function () {
  if (len % 2 == 0) {
    res = (temp[len / 2 - 1] + temp[len / 2]) / 2; //calculate median for same size array
  } else {
    res = temp[len / 2]; //calculate median for different size array
  }
  console.log(res);
};

median();

//IIFE

(function (temp) {
  if (len % 2 == 0) {
    res = (temp[len / 2 - 1] + temp[len / 2]) / 2;
  } else {
    res = temp[len / 2];
  }
  console.log(res);
})(temp);
