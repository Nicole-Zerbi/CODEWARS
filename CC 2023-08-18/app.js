/*Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"*/

//The repeat()method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

//first form an empty array 
let newString = []
//then make a for loop and .push the string onto the array n times
    for(let i = 0; i < n; i++) {
        newString.push(s)
    }
    return newString.join('')
}