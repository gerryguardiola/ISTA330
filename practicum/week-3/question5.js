/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function(input) {
 let ans = [];
 productLoop(input, ans, i = 0);
 
 return ans;
};

var productLoop = (input, ans, i) => {
 let curr = 1;
  for(j = 0; j < input.length; j++){
   for(k = 0; k < input.length; k++){
      if (k != i){
       curr = curr * input[k];
      }
   }
   i++;
   ans.push(curr);
   curr = 1;
  }
 return;
};
