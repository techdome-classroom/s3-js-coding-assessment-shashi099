/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        // Get the value of the current Roman numeral
        let currentVal = romanMap[s[i]];
        
        // Get the value of the next Roman numeral (if it exists)
        let nextVal = romanMap[s[i + 1]];
        
        // If the current value is less than the next value, we subtract it
        if (nextVal > currentVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }
    
    return total;

};


module.exports={romanToInt}