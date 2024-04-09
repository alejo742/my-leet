var isIsomorphic = function(s, t) {
    let characterMap = {}
    let stringLength = s.length

    function isInObject(value) {
        let exists = Object.values(characterMap).includes(value);
        return exists
    }

    for(let i = 0; i < stringLength; i++) {
        if(characterMap[s[i]]) {
            if(characterMap[s[i]] !== t[i]) {
                return false
            }
        }
        else {
            if(!isInObject(t[i])) {
                characterMap[s[i]] = t[i]
            }
            else {
                return false
            }
        }
    }
    return true
};