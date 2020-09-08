/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
let max = 0; 
let min = 10;
let string = n.toString();
for (i = 0; i < string.length; i++){
    digitArray.push(parseInt(string[i]));
}
for (j = 0; j < digitArray.length; j++){
  if (digitArray[j] > max){
    max = digitArray[j];
  }
  if (digitArray[j] < min){
    min = digitArray[j];
  }
}
  return (max-min);
};
