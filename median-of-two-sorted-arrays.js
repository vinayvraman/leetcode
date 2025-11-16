/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // let set = new Set(nums1).union(new Set(nums2))
    const arr = [...nums1, ...nums2].sort((a, b) => a - b)
    console.log(arr)
    if(arr.length === 1){
        return arr[0]
    }
    let mid = Math.trunc(arr.length / 2)
    // console.log(mid)
    if(arr.length % 2 === 0){
        const mid1 = arr[mid - 1]
        const mid2 = arr[mid]
        console.log(`mid1: ${mid1}, mid2: ${mid2}`)
        if(mid1 === 0 && mid2 === 0) 
            return 0;
        return ((mid1 + mid2) / 2)
    } else {
        return arr[mid]
    }
};
