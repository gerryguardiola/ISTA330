/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
 let s = n.toString();
 let digitArray = [];
 let max = 0; 
 let min = 10;
 
 for(i = 0; i < s.length; i++){
  digitArray.push(s.charAt(i));
 }
 
 for(j = 0; j < digitArray.length; j++){
  if (parseInt(digitalArray[j]) > max){
   max = parseInt(digitalArray[j]);
  }
  if (parseInt(digitalArray[j]) < min){
   min = parseInt(digitalArray[j]);
  }
 }
 let val = max - min;
 return val;
};
