function maximumCount (nums){
    let neg=0;
    let pos=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            pos++;
        }
        else if(nums[i]<0){
            neg++;
        }
    }
    return Math.max(neg, pos);
}