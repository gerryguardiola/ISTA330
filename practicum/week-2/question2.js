
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
     let start = 0; 
     let end = 0;
     let max = 0;
     let ending = 0;
     let beginning = 0;
     for (i = 0; i < input.length; i++){
       ending = ending + input[i];
      if (ending < 0){
       ending = 0;
       beginning = i + 1;
      }
      if (max < ending){
       max = ending;
       start = beginning;
       end = i;
      }
     }
  return max;
    
 };
