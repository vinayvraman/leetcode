/*
5. Longest Palindromic Substring
Solved
Medium
Topics
premium lock icon
Companies
Hint
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) return s[0]
    
    let longestPalindrome = ''
    
    // Helper function to expand around center
    const expandAroundCenter = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        return s.substring(left + 1, right)
    }
    
    for(let i = 0; i < s.length; i++) {
        // Check for odd length palindromes (single character center)
        const odd = expandAroundCenter(i, i)
        // Check for even length palindromes (two character center)
        const even = expandAroundCenter(i, i + 1)

        const longer = odd.length > even.length ? odd : even
        // console.log(longer)
        if(longer.length > longestPalindrome.length) {
            longestPalindrome = longer
        }
    }
    
    return longestPalindrome
};
