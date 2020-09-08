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
let dInt = 0;
let count = 1;
  
  for(i = 0; i < input.length; i++){
    for(j = 0; j < input.length; j++){
      if (i != j && input[i] == input[j]){
        count += 1;
      }
    }
    if (count == i){
      dArray.push(i);
    }
  }
  dInt = dArray[0];
  if (dArray.length > 1){
    for (k = 0; k < dArray.length; k++){
      if (dInt < dArray[k]){
        return dArray[k]
      }
    }
  }
  else{
    return dInt;
  }
};
