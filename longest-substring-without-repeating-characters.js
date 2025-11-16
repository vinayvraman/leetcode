/*
Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // if(s.length === 0) return 0;
    // else if(s.length === 1) return 1;

    // let l = 0
    // for(let i = 0; i < s.length;i++){
    //     if(l > s.length - i){
    //         break;
    //     }
    //     for (let k = i + 1; k <= s.length;) {
    //         const subs = s.substring(i, k)
    //         if(subs.includes(s.charAt(k++))){
    //             if(l < subs.length){
    //                 l = subs.length
    //             }
    //             break;
    //         }
    //     }
    // }
    // let l = 0;
    // const seen = new Set();
    // let left = 0;

    // for (let right = 0; right < s.length; right++) {
    //     if(l > s.length - left){
    //         break;
    //     }

    //     while (seen.has(s[right])) {
    //         seen.delete(s[left])
    //         left++
    //     }
    //     seen.add(s[right])
    //     l = Math.max(l, right - left + 1)
    // }
    // return l
    let maxLen = 0;
    let left = 0;
    const charIndex = new Map();
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        if (charIndex.has(char) && charIndex.get(char) >= left) {
            left = charIndex.get(char) + 1;
        }
        
        charIndex.set(char, right);
        maxLen = Math.max(maxLen, right - left + 1);
        
        // Early exit optimization
        if (maxLen >= s.length - left) break;
    }
    
    return maxLen;
};
