/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
let rows = input[0].length;
let cols = input.length;
let array = [];

  for (i = 0; i < cols; i++){
    for (j = 0; j < rows; j++){
      array[rows][cols] = input[cols][rows];
    }
  }
  return array;
};
