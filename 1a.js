// 1. Do the below programs in anonymous function & IIFE
// a. Print odd numbers in an array

var arr = [1, 10, 15, 2, 3, 18, 123, 2322];

// Anonymous Function

var odd = function (a) {
  var res = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      res.push(a[i]);
    }
  }
  console.log(res);
};

odd(arr);

//IIFE

(function (a1) {
  var res = [];
  for (i = 0; i < a1.length; i++) {
    if (a1[i] % 2 === 0) {
      res.push(a1[i]);
    }
  }
  console.log(res);
})(arr);
