// 给你一个链表的头节点 head 和一个特定值 x
// 请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
// 你应当 保留 两个分区中每个节点的初始相对位置
var partition = function (head, x) {
    let pA = a = new ListNode(0)
    let pB = b = new ListNode(0)
    while (head) {
        head.val < x ? a = a.next = head : b = b.next= head
        head=head.next
    }
    a.next = pB.next
    b.next = null
    return pA.next
}