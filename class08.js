//循环队列
var MyCircularQueue = function (k) {
    this.length = k
    this.size = 0
    this.top = -1
    this.tail = 0
    this.st=new Array(k).fill(0)
}
MyCircularQueue.prototype.Queue = function (value) {
    if (this.isFull()) {
        return false
    }
    this.top = (this.top + 1) % this.length
    this.st[this.top] = value
    this.size++
    return true
}
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) {
        return false
    }
    this.tail = (this.tail + 1) % this.length
    this.size--
    return true
}
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) {
        return -1
    }
    return this.st[this.tail]
}
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) {
        return -1
    }
    return this.st[this.top]
}
MyCircularQueue.prototype.isEmpty = function () {
    return  this.size===0
}
MyCircularQueue.prototype.isFull = function () {
    return this.size>=this.length
}