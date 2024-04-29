// 2. Do the below programs in arrow functions.
// c. Sum of all numbers in an array

var arr = [1, 2, 3, 4, 5, 20];

res = (arr) => {
  var sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  console.log(sum);
};

res(arr);
