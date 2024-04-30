// 1. Do the below programs in anonymous function & IIFE
// e. Return all the palindromes in an array

var arr = ["nitin", "bala", "madam", "moM", "krishnan", "Civic"];
var temp = [];
var temp2 = [];

//Anonymous

var palindrome = function (arr) {
  for (k = 0; k < arr.length; k++) {
    var res = [];
    var str = arr[k].toLowerCase();
    for (i = 0, j = str.length - 1; i < str.length; i++, j--) {
      res[j] = str[i];
    }

    if (res.join("") == str) temp.push(res.join(""));
  }
  console.log(temp);
};

palindrome(arr);

//IIFE

(function (arr) {
  for (k = 0; k < arr.length; k++) {
    var res = [];
    var str = arr[k].toLowerCase();
    for (i = 0, j = str.length - 1; i < str.length; i++, j--) {
      res[j] = str[i];
    }

    if (res.join("") == str) temp2.push(res.join(""));
  }
  console.log(temp2);
})(arr);
