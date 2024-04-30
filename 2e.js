// 2. Do the below programs in arrow functions.
// e. Return all the palindromes in an array

var arr = ["nitin", "bala", "madam", "moM", "krishnan", "Civic"];
var temp = [];
var temp2 = [];

palindrome = (arr) => {
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
