var isPalindrome = function(x) {
    //negative edge case
    if (x < 0) {
        return false
    }
    else if (x == 0) {
        return true
    }

    function getNumDigits(number) {
        let numOfDigits = 0 //number representing a power of 10 to count digits
        while(number >= 10**numOfDigits) {
            numOfDigits++
        }
        return numOfDigits
    }
    let xDigits = getNumDigits(x)
    let variableDigits = xDigits 

    let savedLeftDigit = 0
    function getLeftDigit(num, iteration) {
        let power = variableDigits-1
        for(let factor = 0; factor <= 9; factor++) {
            if(getNumDigits(num - (factor*(10**power) + savedLeftDigit)) < variableDigits) {
                savedLeftDigit += factor*(10**power)
                return factor
            }
        }
    }

    let savedRightDigit = 0
    function getRightDigit(num, iteration) {
        let power = iteration
        for(let step = 0; step <= 9; step++) {
            if((num - (step*(10**power) + savedRightDigit)) % 10**(power+1)== 0) {
                savedRightDigit += step*(10**power)
                return step
            }
        }
    }

    for(let i = 0; i <= Math.trunc(xDigits/2); i++) {
        if(getLeftDigit(x, i) != getRightDigit(x, i)) {
            return false
        }
        variableDigits--
    }

    return true
};