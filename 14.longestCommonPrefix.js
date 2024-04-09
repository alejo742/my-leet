var longestCommonPrefix = function(strs) {
    let commonPrefix = ""

    //find shortest string
    let shortestString = strs[0]
    for(let string = 1; string < strs.length; string++) {
        if(strs[string].length < shortestString.length) {
            shortestString = strs[string]
        }
    } // O(n) complexity

    characterLoop:
    for(let i = 0; i < shortestString.length; i++) {
        let currentCharacter = strs[0][i]

        wordLoop:
        for(let j = 0; j < strs.length; j++) {
            if(strs[j][i] !== currentCharacter) {
                wasEqual = false
                break characterLoop
            }
        }
        commonPrefix += strs[0][i]

    }
    return commonPrefix
};
