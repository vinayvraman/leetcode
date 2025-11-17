/*
6. Zigzag Conversion
Solved
Medium
Topics
premium lock icon
Companies
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if(numRows === 1)
        return s
    // console.log(`The input is ${s} and numRows is ${numRows}`)
    let k = 0, coord = { x: 0, y: 0, r: false }
    const arr = []
    arr[0] = []
    arr[0][0] = s[k++]
    while (k < s.length) {
        const { x, y, r } = getNextStep(coord, numRows)
        if(!arr[x])
            arr[x] = []
        arr[x][y] = s[k++]
        coord = { x, y, r }
    }
    // console.table(arr)
    // return consolidate(arr)
    return arr.flat().join('')
};

const getNextStep = ({ x, y, r }, numRows) => {
    // console.log(`Before -> x: ${x}, y: ${y}, r: ${r}, numRows: ${numRows}`)

    if (x >= numRows || r) {
        // console.log(1)
        x--
        y++

        r = !(x === 0)
    } else {
        // console.log(2)
        x++
        r = (x === (numRows - 1))
    }

    // console.log(`After -> x: ${x}, y: ${y}, r: ${r}, numRows: ${numRows}`)
    // console.log('-------------------------------------------------------')
    return ({ x, y, r })
}
