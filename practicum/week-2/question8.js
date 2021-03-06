/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
let dArray = [];
let dInt = -1;
let count = 0;
  
  for(i = 0; i < input.length; i++){
    count = 0;
    for(j = 0; j < input.length; j++){
      if (input[i] == input[j]){
        count += 1;
      }
    }
    if (count == input[i]){
      dArray.push(input[i]);
    }
  }
  if (dArray.length < 1){
    return -1;
  }
  if (dArray.length > 1){
    for (k = 0; k < dArray.length; k++){
      if (dInt < dArray[k]){
        dInt = dArray[k]
      }
    }
  }
  return dInt;
};
