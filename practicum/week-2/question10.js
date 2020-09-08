/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
let diff = 10000;
let array = [];
let input = input.sort();
for(i = 0; i < input.length-1; i++){
 if (input[i+1] < input[i]){
  continue;
 }
 let min = input[i+1] - input[i];
 if (min == diff){
  array[array.length] = [];
  array[array.length].push(input[i]);
  array[array.length].push(input[i+1]);
 }
 if(min < diff){
  let array = [];
  array[0] = [];
  array[0].push(input[i]);
  array[0].push(input[i+1])
  diff = min;
 }
}
return array;
};
