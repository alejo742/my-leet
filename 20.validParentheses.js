var isValid = function(s) {
    let brackets = { //establishing the correct relationships
        ")": "(", "]": "[", "}": "{"
    }
    let pendingClosing = [] //all the brackets that are pending closing in a queue

    for(let i = 0; i < s.length; i++) {
        let currentCharacter = s[i]

        if(currentCharacter === "(" || currentCharacter === "[" || currentCharacter === "{") { //it is an opening bracket
            pendingClosing.unshift(currentCharacter)
        }
        else { //it is a closing bracket
            if(brackets[currentCharacter] !== pendingClosing[0]) {//correct closing order
                return false
            }
            else {
                pendingClosing.shift()
            }
        }
    }
    if(pendingClosing[0]) {
        return false
    }
    return true
};