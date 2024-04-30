// 2. Do the below programs in arrow functions.
// d. Return all the prime numbers in an array

var arr = [1, 9, 4, 14, 17, -10, 19, 0];

prime = (arr) => {
  var res = [];
  arr.forEach((num) => {
    if (num <= 1) return false; //numbers that are less than or 1 are not prime numbers

    if (num % 2 !== 0) res.push(num); // If no divisors were found, then num is a prime number
  });
  console.log(res);
};

prime(arr);
