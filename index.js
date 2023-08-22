function isPalindrome(word) {
  // Write your algorithm here
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedWord === cleanedWord.split('').reverse().join('');

}

/* 
  Add your pseudocode here

  1. convert the input word to lowercase and remove non-alphanumeric characters
  2. create a variable `cleanWord` to stroe the cleaned word.
  3. Compare `cleanedWord` with its reverse.
  4. if they are equal, return true (it's a palindrome), otherwise return fals.
*/

/*
  Add written explanation of your solution here

  The function first cleans the input word by converting it to lowercase and removing
  non-alphanumeric characters. Then, it compares the cleaned words with its reverse.
  If they match, the function returns true, indication that the word is a palindrome.
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
