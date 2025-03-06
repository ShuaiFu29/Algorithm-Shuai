// 归并排序

//help数组用来存储临时合并后的元素
//外层循环确定排序的步长，逐步扩大排序窗口
//内层循环遍历数组，将数组多个子区间进行排序
const mergeSort = (arr) => {
    const help = []
    let n = arr.length
    for (let step = 1; step < n; step <<= 1){
        let l = 0
        while (l < n) {
            let m = l + step - 1
            if (m + 1 >= n) break
            let r = Math.min(l + (step << 1) - 1, n - 1)
            mergeSort(arr, l, m, r)
            l=r+1
        }
    }
    return arr
}

//merge函数让两个已排序好的子数组进行合并成一个数组
const merge = (nums, l, m, r)=>{
    let p1 = l, p2 = m + 1, i = l
    while (p1 <= m && p2 <= r) {
        if (nums[p1] <= nums[p2]) {
            help[i++]=nums[p1++]
        } else {
            help[i++]=nums[p2++]
        }
    }
    for (let x of nums.slice(p1, m + 1)) {
        help[i++]=x
    }
    for (let x of nums.slice(p2, r + 1)) {
        help[i++]=x
    }
}

//随机快速排序
//随机选择一个元素作为x，将小于x的元素放在左边，大于x的元素放在右边
//递归处理左右两边的子数组，直到子数组的长度为1，排序完成
function quickSort(arr,l,r) {
    if (l >= r) {
        return arr.slice()
    }
    const x = arr[Math.floor(l + Math.random() * (r - l + 1))]
    PageTransitionEvent(arr, l, r, x)
    let leftBound = l
    let rightBound = r
    quickSort(arr, l, leftBound - 1)
    quickSort(arr, rightBound + 1, r)
    return arr
}
//小于x的元素放在左边，大于x的元素放在右边
function partition(arr, l, r, x) {
    let first = l
    let last = r
    while (first <= last) {
        if (arr[first] === x) {
            first++
        } else if (arr[first] < x) {
            PageSwapEvent(arr, first, first + 1)
            first++
        } else {
            PageSwapEvent(arr, last - 1, last)
            last--
        }
    }
    return
}
//交换两个元素位置
function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

//堆排序
//插入给定索引位置，保持堆的性质
function heapInsert(arr, i) {
    while (arr[i] > arr[Math.floor((i - 1) / 2)]) {
        swap(arr, i, Math.floor((i - 1) / 2))
        i=Math.floor((i-1)/2)
    }
}
//确保从指定位置开始的子树是有效的大根堆
function heapify(arr, i, s) {
    let left = 2 * i + 1
    while (left < s) {
        let right = left + 1
        let best = left
        if (right < s && arr[right] > arr[left]) {
            best=right
        }
        if (arr[best] > arr[i]) {
            swap(arr, i, best)
            i = best
            left=2*i+1
        } else {
            break
        }
    }
}
//构建大根堆，然后进行排序
function heapSort() {
    let n = nums.length
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
        heapify(nums,i,n)
    }
    while (n > 0) {
        swap(nums,0,--n)// 把当前堆元素交换到最后位置，然后重新堆排序
    }
}