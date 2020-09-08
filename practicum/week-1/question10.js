/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
 let digitArray = (""+n).split("");
 let min = 10;
 let max = -1;
 for (i = 0; i < digitArray.length; i++){
   if (parseInt(digitArray[i]) > max){
     max = parseInt(digitArray[i])
   }
   if (parseInt(digitArray[i]) < min){
     min = parseInt(digitArray[i])
   }
 }
 return (max - min);
};
