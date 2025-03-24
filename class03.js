//冒泡排序
function bubbleSort(arr) {
    if (arr === null || arr.length < 2) return arr
    for (let end = arr.length - 1; end > 0; end--){
        for (let i = 0; i < end; i++){
            if (arr[i] > arr[i + 1]) {
                swap(arr,i,i+1)
            }
        }
    }
}
//插入排序
function insertSort(arr) {
    if (arr === null || arr.length < 2) return
    for (let i = 1; i < arr.length; i++){
        for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--){
            swap(arr,j,j+1)
        }
    }
}
//选择排序
function selectSort(arr) {
    if (arr === null || arr.length < 2) return
    for (let minIndex, i = 0; i < arr.length - 1; i++){
        minIndex = i
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]) {
                minIndex=j
            }
        }
        swap(arr,i,minIndex)
    }
}
//交换数组元素
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j]=temp
}