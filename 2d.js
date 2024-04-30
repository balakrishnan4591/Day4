// 2. Do the below programs in arrow functions.
// d. Return all the prime numbers in an array

var arr = [1, 9, 4, 14, 17, -10, 19, 0, 7, 2];

prime = (arr) => {
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
