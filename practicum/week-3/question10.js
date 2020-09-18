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
  if (s == ""){
    return true;
  }
  let str = s.toLowerCase();
  let arr = s.split(" ");
  let string = arr.join("")
  let boolean = recursivePalindrome(string);
  return boolean
};

var recursivePalindrome = (string) => {
  if (string.length <= 1){
    return true;
  }
  if (string.chatAt(0) == '-' || string.chatAt(0) == '?' ||  string.chatAt(0) == ','){
    return recursivePalindrome(string.substring(1));
  }
  if (string.chatAt(string.length -1 ) == '-' || string.chatAt(string.length -1) == '?' 
      ||  string.chatAt(string.length -1) == ','){
    return recursivePalindrome(string.substring(0, string.length - 1));
  }
  
  if (string.charAt(0) != string.chatAt(string.length - 1)){
    return false;
  }
  return recursivePalindrome(string.substring(1, string.length -1));
};
