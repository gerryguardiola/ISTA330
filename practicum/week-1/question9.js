/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
var string = "";
  for (i = 0; i < shuffleIndices.length; i++){
    if (i < shuffleIndices.length-1){
       string += input.substring(shuffleIndices[i], shuffleIndices[i+1]);
    }
    else{
       string += input.substring(shuffleIndices[i]);
    }
  }
  return string
};
