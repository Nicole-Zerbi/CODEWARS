/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'*/

function solution(str){
    // Step 1. Use the split() method to return a new array
     var splitString = str.split(""); // var splitString = "world".split("");
     // ["w", "o", "r", "l", "d"]
  
     // Step 2. Use the reverse() method to reverse the new created array
     var reverseArray = splitString.reverse(); // var reverseArray = ["w", "o", "r", "l", "d"].reverse();
     // ["d", "l", "r", "o", "w"]
 
     // Step 3. Use the join() method to join all elements of the array into a string
     var joinArray = reverseArray.join(""); // var joinArray = ["d", "l", "r", "o", "w"].join("");
     // "olleh"
     
     //Step 4. Return the reversed string
     return joinArray; // "dlrow"
 }
 
 //easier condensed way: 
  function solution(str){
  return str.split('').reverse().join(''); }// 
