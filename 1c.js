//Do the below programs in anonymous function & IIFE
//Sum of all numbers in an array

var arr = [1, 2, 3, 4, 5, 20];

//Anonymous Function

var res = function (a) {
  var sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  console.log(sum);
};
res(arr);

//IIFE

(function (a) {
  var sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  console.log(sum);
})(arr);
