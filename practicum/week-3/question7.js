/*
Given a m x n matrix filled with non-negative numbers, 
find a path from top left to bottom right 
which minimizes the sum of all numbers along its path. Return the sum.

Note: You can only move either down or right at any point in time.

Example: 
input: [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
output: 7
        Because the path 1→3→1→1→1 minimizes the sum.

*/

var minPath = function(M) {
  let r = M.length;
  let c = M[0].length;
  let ans = 0;
  
  if (r == c){
    for (let i = 1; i < r; i++){
      M[i][0] += M[i-1][0];
      M[0][i] += M[0][i-1];
    }
  }
  else{
    for (let i = 1; i < r; i++){
      M[i][0] += M[i-1][0];
    }
    for (let j = 1; j < c; j++){
      M[0][j] += M[0][j-1];
    }
  }
  smallestNum(M, r, c);
  ans = M[r-1][c-1];
  
  return ans;
};

var smallestNum = (M, r, c) =>{
  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++){
      if (M[i-1][j] < M[i][j-1] ){
        M[i][j] = M[i][j] + M[i-1][j];
      }
      else{
        M[i][j] = M[i][j] + M[i][j-1];
      }
    }
   }
  return;
}
