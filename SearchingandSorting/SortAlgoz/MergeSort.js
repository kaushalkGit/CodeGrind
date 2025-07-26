function mergeSort(arr){
    //base Case
    if(arr.length<=1) return arr;

    let mid =Math.floor(arr.length/2)

    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid,arr.length))

    return merge(left,right)

}
function merge(left,right){
    let sortedArray=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]
}

console.log(mergeSort([1,4,2,7,8,4,8,2,3]))