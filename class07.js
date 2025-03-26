//二叉树的遍历-递归版
//先序遍历 
function preOrder(root) {
    if (root === null) return
    console.log(root.val)
    preOrder(root.left)
    preOrder(root.right)
}
//中序遍历
function inOrder(root) {
    if (root === null) return
    inOrder(root.left)
    console.log(root.val)
    inOrder(root.right)
}
//后序遍历
function posOrder(root) {
    if (root === null) return
    posOrder(root.left)
    posOrder(root.right)
    console.log(root.val)
}
//二叉树的遍历-非递归版
//先序遍历
 function dfsPre(node) {
    let result = []
    let stack = []
    stack.push(node)
    while (stack.length) {
        let node = stack.pop()
        result.push(node.val)
        if (node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
    }
    return result
}
dfsPre(root)
//中序遍历
function dfsIn(node) {
    let result = []
    let stack = []
    while (stack.length || node) {
        if (node) {
            stack.push(node)
            node=node.left
        } else {
            node = stack.pop()
            result.push(node.val)
            node=node.right
        }
    }
    return result
}
dfsIn(root)
//后序遍历
function dfsPos(node) {
    let result = []
    let stack = []
    stack.push(node)
    while (stack.length) {
        if (node.left && !node.touched) {
            node.touched = 'left'
            node = node.left
            stack.push(node)
            continue
        }
        if (node.right && node.touched !== 'right') {
            node.touched = 'right'
            node = node.right
            stack.push(node)
            continue
        }
        node = stack.pop()
        node.touched && delete node.touched
        result.push(node.val)
        node=stack.length?stack[stack.length-1]:null
    }
    return result
}