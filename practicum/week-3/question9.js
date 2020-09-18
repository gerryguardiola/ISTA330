/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) { 
 let moves = 0;
 let unique = {}; 
 let val = 0;
 for (i = 0; i < A.length; i++){
  val = A[i];
  while (unique[val]) { 
   val += 1; 
   moves++; 
  }
  unique[A[i]] = true;
 }
 
  return moves;
};
