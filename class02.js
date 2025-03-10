function BinarySearch(arr, target) {
    let left = 0, right = arr.length - 1
    while (left <= right) {
        let mid = left + (right - left) >> 1
        if (arr[mid] > target) {
            right=mid-1
        } else if (arr[mid] < target) {
            left=mid+1
        } else {
            return mid
        }
    }
}
//如何判断一个数是否为2的幂
function isPowerOfTwo(n) {
    return n>0 && (n&(n-1))===0
}
//如何判断一个数某位是不是1
function isOne(n, index) {
    return (n>>index)&1===1
}
//如何将一个数某位变为1
function setOne(n, index) {
    return n|(1<<index)
}
//如何将一个数某位变为0
function setZero(n, index) {
    return n&(~(1<<index))
}
//如何将一个数某位取反
function reverseOne(n, index) {
    return n^1<<index
}