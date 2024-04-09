var twoSum = function(nums, target) {
    let numsObject = {}
    for(let i = 0; i <= nums.length-1; i++) {
        let complementNum = target - nums[i]
        if(numsObject[complementNum] !== undefined) {
            return [numsObject[complementNum], i]
        }
        numsObject[nums[i]] = i
    }
};