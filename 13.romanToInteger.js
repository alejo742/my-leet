var romanToInt = function(s) {
    const symbols = ["M", "D", "C", "L", "X", "V", "I"]
    const equivalences = [1000, 500, 100, 50, 10, 5, 1]

    let finalNum = 0
    let lastValue = 0

    for(let i = 0; i < s.length; i++) {
        for(let sym = 0; sym < symbols.length; sym++) {
            if(s[i] == symbols[sym]) {
                let symValue = equivalences[sym]

                if(lastValue >= equivalences[sym]){
                    finalNum += symValue
                    lastValue = symValue
                }
                else {
                    finalNum += (symValue - (lastValue*2))
                    lastValue = symValue
                }

            }
        }
    }
    return finalNum
};