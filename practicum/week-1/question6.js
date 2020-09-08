/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
  let index1 = 0;
  let index2 = 0;
if (input.length % 2 != 0){
  index1 = (input.length-1) / 2;
  return input[index1];
}
else{
  index1 = input.length / 2 ;
  index2 = input.length / 2 - 1;
  return (input[index1]+input[index2])/2;
}
};
