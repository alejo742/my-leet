var lengthOfLastWord = function(s) {
    let lastWord = ""
    let found = false
    for(let i = 1; i <= s.length; i++) {
        if(s[s.length-i] !== " ") {
            lastWord += s[s.length-i]
            found = true
        } 
        else if(found) {
            break
        }
    }

    return lastWord.length
};