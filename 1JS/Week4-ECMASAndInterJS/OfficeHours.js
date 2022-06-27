//! FROM LIVE CODE CHALLENGE: 6/23/22
//* Anagram challenge: comparing words with each other
console.log(`-----Solving ANAGRAM with .from(), .sort(), .join() methods-----`)
var isAnagram = function(s, t) {
    return Array.from(s).sort().join() === Array.from(t).sort().join();
}

console.log(isAnagram('tar', 'rat'));