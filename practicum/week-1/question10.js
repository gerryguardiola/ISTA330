/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
let mod = 10;
let digitArray = [n % mod];
let temp = n % mod;
let i = 0;
let max = 0; 
let min = 10;
  
while (temp != n){
   mod = mod * 10;
   temp = n % mod - digitArray[i];
   digitArray.push(n % mod - temp);
   temp = n % mod;
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
