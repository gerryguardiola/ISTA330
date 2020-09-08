/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
var mod = 10;
var temp = 0;
var digitArray = [n % mod];
var i = 0;
var max = 0; 
var min = 0;
  
while (temp != n){
   mod = mod * 10;
   digitArray.push(n % mod - digitArray[i]);
   temp = n % mod
   i += 1;
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
