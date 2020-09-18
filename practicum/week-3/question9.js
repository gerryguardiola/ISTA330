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
 let unique = [];
 for (i = 0; i < A.length; i++){
   if (unique.includes(A[i])){
     continue;
   }
   else{
     unique.push(A[i]);
   }
 }
 
  return (A.length - unique.length);
};
