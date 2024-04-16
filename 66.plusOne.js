var plusOne = function(digits) {
    function addOne(diff) {
        if(digits[digits.length-diff] !== undefined) {
            digits[digits.length-diff]++
        }
        else {
            digits.unshift(1)
        }

        if(digits[digits.length-diff] === 10) {
            digits[digits.length-diff] = 0
            addOne(diff+1)
        }
    }
    addOne(1)
    return digits
};
