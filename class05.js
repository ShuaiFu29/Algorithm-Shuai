//反转单链表
var reverseList = function (head) {
    let pre = null, cur = head
    while (cur) {
        let nxt = cur.next
        cur.next = pre
        pre = cur
        cur=nxt
    }
    return pre
}
//链表合并
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode()
    let cur = dummy
    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1
            list1=list1.next
        } else {
            cur.next = list2
            list2=list2.next
        }
        cur=cur.next
    }
    cur.next = list1 ?? list2
    return dummy.next
}
//两数相加
//给你两个 非空 的链表，表示两个非负的整数。
//它们每位数字都是按照逆序的方式存储的，
// 并且每个节点只能存储一位数字
var addTwoNumbers = function (l1, l2) {
    const dummy = new ListNode()
    let cur = dummy
    let carry=0
    while (l1 || l2 || carry) {
        if (l1) {
            carry += l1.val
            l1=l1.next
        }
        if (l2) {
            carry += l2.val
            l2=l2.next
        }
        cur = cur.next = new ListNode(carry % 10)
        carry=Math.floor(carry/10)
    }
    return dummy.next
}