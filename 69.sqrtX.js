var mySqrt = function(x) {
    let root = 0
    while(root*root < x) {
        var nextRoot = root+1
        if((nextRoot)*(nextRoot) === x) {
            return nextRoot
        }
        else if((nextRoot)*(nextRoot) > x) {
            return root
        }
        else {
            root++
        }
    }
    return root
};