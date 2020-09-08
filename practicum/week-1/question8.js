/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
var biggerAndEven = 0;
var arrayBE = [];
  for (i = 0; i < input.length; i++){
    biggerAndEven = 0;
    for (j = 0; j < input.length; j++){
      if (i != j &&  input[i] < input[j] && input[j] % 2 == 0){
        biggerAndEven += 1;
      }
    }
    arrayBE.push(biggerAndEven);
  }
  return arrayBE;
};
