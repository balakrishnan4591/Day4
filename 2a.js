// 2. Do the below programs in arrow functions
// a. Print odd numbers in an array

var arr = [1, 10, 15, 2, 3, 18, 123, 2322];

odd = (a) => {
  var res = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      res.push(a[i]);
    }
  }
  console.log(res);
};

odd(arr);
