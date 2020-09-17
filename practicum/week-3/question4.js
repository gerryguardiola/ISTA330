/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

var powerSet = function(input) {
 let ans = [];
 subsetsDFS(input, ans);
 
 return ans;
};

var subsetsDFS = function(input, ans, i = 0, subset = []){
    ans.push(subset);
 
    for (; i < input.length; i++)
        subsetsDFS(input, ans, i + 1, subset.push(input[i]));
 
    return;
}
