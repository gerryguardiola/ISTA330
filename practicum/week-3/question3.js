/*
Given an array input of 0s and 1s and an integer k, 
return true if all ones(1s) are at least k places away from each other, 
otherwise return false.

Example:
input: input = [1,0,0,0,1,0,0,1], k = 2
output: true
*/

var kStepAway = function(input, k) {
    let temp = 0; 
    
    for (i = 0; i < input.length; i++){
      if (input[i] == 1 && temp == 0){
        temp += 1;
        continue;
      }
      if (input[i] == 1 && temp < k){
        return false;
      }
      if (input[i] == 1 && temp >= k){
        temp = 0;
        continue;
      }
      temp++;
    }
    return true;
};
