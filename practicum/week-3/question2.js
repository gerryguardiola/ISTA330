
/*
Given an array of integers, 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

 var findDuplicates = function(input) {
    let inputSet = new Set(input);
          
    input.forEach(num => {
        if (inputSet.has(num)) {
            inputSet.delete(num);
        } 
        else {
            inputSet.add(num);
        }
    });
    let duplicateArr = Array.from(inputSet);  
          
    return duplicateArr;
 };
