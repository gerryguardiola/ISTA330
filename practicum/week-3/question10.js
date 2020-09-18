/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {  
  let i = 0; 
  let arr = s.split(" ");
  let string = arr.join("");
  let j = string.length - 1;
  let firstChar = "";
  let lastChar = "";
  while (i != j) {  
   if (!firstChar.match(/^[a-z0-9]+$/i)){
     i++;
     continue;
   }     
   if (!lastChar.match(/^[a-z0-9]+$/i)){ 
     j--;
     continue;
   }
   if (firstChar != lastChar){
     return false;
   }     
   else { 
     i+= 1; 
     j-= 1; 
   }
  }
    
  return true;
  
};
