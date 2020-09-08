/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
let curr = input[0];
if (input[0] > input[1]){
  for (i = 0; i < input.length - 1; i++){
    if (curr < input[i+1]){
      return false;
    }
    curr = input[i]
  }
  return true;
}
else{
  for (i = 0; i < input.length - 1; i++){
    if (curr > input[i+1]){
      return false;
    }
    curr = input[i]
  }
  return true;
}
};

console.log('hi');
