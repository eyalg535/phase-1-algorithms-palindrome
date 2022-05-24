function isPalindrome(word) {
  // write a function that recive one argument, turn it to lowerCase letters then return true if the string = palindrome, else return false.
  const lowerCaseWord = word.toLowerCase()
  const reverseWord = lowerCaseWord.split('').reverse().join('')
  return reverseWord === lowerCaseWord
}

/* 
 declering a fonction with one argument that:
 declering a variable that takes the string(argument) and use a method to return a new string with lower case letters
 declering a variable that takes the new string,then use a method to split the string object into an array of strings by separating the string into sub strings
 then applying the a method on the array to reverse it in place. the first array elemnt becomes the last and the last becomes the first
 then applying the a method to joins all the elements of the array into a string
 finely return true if the string enterd as argument = the string returned after applying all the methods above. else return false
*/

/*
 to return a string with lower case letters i use .toLowerCase()
 to split the string into an array i use the .split()
 then i use .reverse() to reverse the elements in the new array
 then i use .join() to convert it back to a string
 then use the === to check if the new string is strictly equals to the argument and return a Boolean.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
