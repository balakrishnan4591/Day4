// 2. Do the below programs in arrow functions.
// b. Convert all the strings to title caps in a string array

var str = "my Name is : Bala";

titleCaps = (str) => {
  str = str.toLowerCase().split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

console.log(titleCaps(str));
