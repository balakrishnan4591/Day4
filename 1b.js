// 1. Do the below programs in anonymous function & IIFE
// b. Convert all the strings to title caps in a string array

var str = "my Name is : Bala";
var str2 = "strings to title caps";

// Anonymous Function

var titleCaps = function (a) {
  str = a.toLowerCase().split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(" "));
};

titleCaps(str);

// IIFE

(function (a) {
  str = a.toLowerCase().split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(" "));
})(str2);
