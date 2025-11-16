/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    let result = undefined
    let ol1 = l1
    let ol2 = l2
    let borrow = 0
    let l = undefined

    while (1) {
        let val1 = 0, val2 = 0, val = 0

        if (ol1) {
            val1 = ol1.val ?? 0
            ol1 = ol1.next
        }

        if (ol2) {
            val2 = ol2.val ?? 0
            ol2 = ol2.next
        }

        val = val1 + val2 + borrow
        if(val >= 10) {
            borrow = Math.floor( val / 10)
            val = val % 10
        } else {
            borrow = 0
        }
        let last = undefined
        if(!ol1 && !ol2 && borrow > 0) {
            last = new ListNode(borrow, undefined)
        }
        let current = new ListNode(val, last)
        
        if (!result) {
            result = l = current
        } else {
            l.next = current
            l = l.next
        }

        if (!ol1 && !ol2) {
            return result
        }
    }

    return result
};
