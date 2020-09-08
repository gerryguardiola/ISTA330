/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
 let max = input[0];
 let index = 0;
   for (i = 0; i < input.length; i++){
     if (input[i] > max){
      max = input[i]
      index = i;
     }
   }
  
  for (j = 0; j < input.length; j++){
    if(j != index && max < (input[j]*2)){
     return false;
    }
  }
 return true;
};
