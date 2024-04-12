var strStr = function(haystack, needle) {
    if(needle.length > haystack.length) return -1

    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            let match = true;
            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    match = false;
                    break;
                }
            }
            if (match) return i;
        }
    }
    return -1
};