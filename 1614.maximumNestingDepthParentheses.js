var maxDepth = function(s) {
    //iterate over all characters
    let depth = 0
    let accumulative = 0
    for(let i = 0; i < s.length; i++) {
        var currentCharacter = s[i]
        if(currentCharacter === "(") {
            accumulative++
            if(depth < accumulative) {
                depth = accumulative
            }
        }
        else if(currentCharacter === ")") {
            accumulative--
        }
    }
    return depth
};