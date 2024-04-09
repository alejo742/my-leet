var removeDuplicates = function(nums) {
    let swap = 1
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] !== nums[i+1]) {
            nums[swap] = nums[i+1]
            swap++
        }
    }
    return swap
};