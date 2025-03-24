//有序数组中是否存在一个数字
function findNumber(arr,target) {
    for (let x of arr) {
        if (x === target) {
            return true
        }
    }
    return false
}
//有序数组中找>=target的最左位置
function findLeft(arr, target) {
    let l = 0, r = arr.length - 1, mid = 0
    let ans = -1
    while (l <= r) {
        mid = l + (r - l) / 2
        if (arr[mid] >= target) {
            ans = mid
            r=mid-1
        } else {
            l=mid+1
        }
    }
    return ans
}
//有序数组中找到<=target的最右位置
function findRight(arr,target) {
    let l = 0, r = arr.length, mid = 0
    let ans = -1
    while (l <= r) {
        mid = l + (r - l) / 2
        if (arr[mid] >= target) {
            ans = mid
            l=mid+1
        } else {
            r=mid-1
        }
    }
    return ans
}
// 峰值元素是指其值严格大于左右相邻值的元素
// 给你一个整数数组 nums，已知任何两个相邻的值都不相等
// 找到峰值元素并返回其索引
// 数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
// 你可以假设 nums[-1] = nums[n] = 无穷小
// 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。
function findPeakElement(arr) {
    let n = arr.length
    if (n === 1) return 0
    if (arr[0] > arr[1]) return 0
    if (arr[n - 1] > arr[n - 2]) return n - 1
    let l = 1, r = n - 2, mid = 0, ans = -1
    while (l <= r) {
        mid = l + (r - l) / 2
        if (arr[mid - 1] > arr[mid]) {
            r=mid-1
        } else if (arr[mid] < arr[mid + 1]) {
            l=mid+1
        } else {
            ans = mid
            break
        }
    }
    return ans
}