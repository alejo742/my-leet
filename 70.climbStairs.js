var climbStairs = function(n) {
    let first = 0
    let second = 1
    let current = 0
    for(let i = 1; i <= n; i++) {
        current = first+second
        first = second
        second = current
    }

    return current
}; //it is just a fibonacci sequence bruh