/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  

  //     //empty string is a palindrome
  //     // check if the string has length of 0, to return true, its a palandrome 
  //     // take the string and remove the spaces. 
  //     // iterate back and front with a two pointer iteration.
  //     // if the two pointers are not the same, then kick out false, 
  //     // default return true at the end

      let removeSpecialChars= s.replace(/[^A-Za-z0-9]/g, '')
      let toLowerCase = removeSpecialChars.toLowerCase()
      let removeWhiteSpaces = toLowerCase.replace(/\s+/g, '');
      console.log(removeWhiteSpaces)
          if (removeWhiteSpaces.length === 0 || removeWhiteSpaces.length === 1){
              return true // length of 0 is a palindrome, length of 1 is a palindrome 
          }
      // iterate over string with pointer at beggingin and pointer at end, if they are not the same as you check kick out false,
  for (let i =0, j=removeWhiteSpaces.length - 1; i < removeWhiteSpaces.length, j >= i; i++, j-- ){
      if (removeWhiteSpaces[i] !== removeWhiteSpaces[j]){
        return false;
      }
  }
      return true
  };