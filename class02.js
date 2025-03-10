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

// 二分查找板子
// arr  [1,2,3,4,5,5,5,7,8]
//查找最后一个<=5的数的下标
let pos1= function find(arr,target) {
    let l = 0, r = arr.length + 1   //开区间
    while (l + 1 < r) {            //l+1=r 时结束
        let mid = l + r >> 1
        if (arr[mid] <= target) l = mid
        else r=mid
    }
    return l
}
//查找第一个>=5的数的下标
let pos2 = function find(arr, target) {
    let l = 0, r = arr.length + 1   //开区间
    while (l + 1 < r) {            // l+1=r 时结束
        let mid = l + r >> 1
        if (arr[mid] >= target) r = mid
        else l=mid
    }
    return r
}
//指针的跳跃次数为logN
//可行区的指针最后一定指向答案

//查找最后一个<=8的数的下标
let pos3 = function find(arr, target) {
    let l = 0, r = arr.length + 1    //开区间
    while (l + 1 < r) {             // l+1=r  时结束
        let mid = l + r >> 1      
        if (arr[mid] <= target) l = mid
        else r=mid
    }
    return l
}
//查找第一个>=1的数的下标
let pos4 = function find(arr, target) {
    let l = 0, r = arr.length + 1    //开区间
    while (l + 1 < r) {             // l+1=r 时结束
        let mid = l + r >> 1
        if (arr[mid] >= target) r = mid
        else l=mid
    }
    return r
}
// 1.最大化查找（可行区在左侧） 查找最后一个<=target的数的下标
// 2.最小化查找（可行区在右侧） 查找第一个>=target的数的下标
//指针的跳跃次数logN
//l+1=r 时结束
//可行区的指针最后一定指向答案
//开区间可以正确处理边界


//浮点数二分：最大化查找
//求一个浮点数（-10000<=y<=10000）的平方根
let doubleFind = function find(y) {
    let l = -100, r = 100
    while (r - l > 1e-5) {
        let mid = (l+r)/2
        if (mid * mid <= y) l = mid
        else r=mid
    }
    return l
}
