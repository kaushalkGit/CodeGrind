/*var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
console.log(twoSum([2,7,11,15],9))
*/
var twoSum =function(nums,tar){
    let char={};
    for(let i=0;i<nums.length;i++){
        let compli=tar-nums[i];
        if(char.hasOwnProperty(compli))
            return [char[compli],i]

        char[nums[i]] = i;
    }
    
}
console.log(twoSum([2,7,11,15],9))