/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
let n1 = 1;
let n2 = 0;
let temp = 0;
while (n >= 0){
    temp = n1;
    n1 += n2;
    n2 = temp;
    n-= 1;
}
  return n2; 
};
