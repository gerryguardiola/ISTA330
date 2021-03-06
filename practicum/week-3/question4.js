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
 subsetMaker(input, ans);
 
 return ans;
};

var subsetMaker = (input, ans, count = 0, subset = []) => {
    ans.push(subset);
 
    for (; count < input.length; count++){
        subsetMaker(input, ans, count + 1, subset.concat(input[count]));
    }
    return;
}
