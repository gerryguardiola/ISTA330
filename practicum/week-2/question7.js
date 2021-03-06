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
let col = M.length;
let row = M[0].length;
let array = [];
for (i = 0; i < row; i++){
  array[i] = [];
  for (j = 0; j < col; j++){
    array[i][j] = M[j][i]
  }
}
return array;
};
