//!OFFICE HOURS 6/27/22

//* Valid Palindrome challenge

s = 'amanaplanacanalpanama'
t = 'race a car'
a = 'A man, a plan, a canal: Panama'

var isPalindrome = function(s) {

    let lowerS = s.toLowerCase();
    //remove all the non letters or numbers
    //compare the results forward and backward to see if it matches
    let cleanString = '';
    for (let i = 0; i < lowerS.length; i ++) {
        if( (lowerS[i].charCodeAt() >= 97 && lowerS[i].charCodeAt() <= 122) ||
            (lowerS[i].charCodeAt() >= 48 && lowerS[i].charCodeAt() <= 57) ) {
            cleanString += lowerS[i];
        }
    }
    let palArr = cleanString.split('');
    let revPalArr = [...palArr];
    revPalArr.reverse();

    console.log(palArr);
    console.log(revPalArr);

    for (let j = 0; j < revPalArr.length; j++) {
        console.log('palArr[j]:', palArr[j], 'revPalArr[j]) is:', revPalArr[j]);
        if (palArr[j] !== revPalArr[j]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome('0P'));