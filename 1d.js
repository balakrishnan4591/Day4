// 1. Do the below programs in anonymous function & IIFE
// d. Return all the prime numbers in an array

//Anonymous Function

var arr = [1, 9, 4, 14, 17, -10, 19, 0, 7, 2];

var prime = function (arr) {
  arr = arr.filter((number) => {
    if (number > 1) {
      //numbers that are less than or equal to 1 are not prime numbers
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    }
  });
  console.log(arr);
};

prime(arr);

// IIFE

(function (arr) {
  arr = arr.filter((number) => {
    if (number > 1) {
      //numbers that are less than or equal to 1 are not prime numbers
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    }
  });
  console.log(arr);
})(arr);
