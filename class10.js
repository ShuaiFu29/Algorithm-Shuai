//二叉树遍历--递归版
//前序遍历
function preOrder(root) {
    if (!root) return
    console.log(root.val)
    preOrder(root.left)
    preOrder(root.right)
}
//中序遍历
function inOrder(root) {
    if (!root) return
    inOrder(root.left)
    console.log(root.val)
    inOrder(root.right)
}
//后序遍历
function postOrder(root) {
    if (!root) return
    postOrder(root.left)
    postOrder(root.right)
    console.log(root.val)  
}
//二叉树遍历--迭代版
//前序遍历
function preOrder(root) {
    if (!root) return
    const stack = []
    let p = root
    while (stack.length || p) {
        while (p) {
            console.log(p.val)
            stack.push(p)
            p = p.left
        }
        const n = stack.pop()
        p = n.right
    }
}
//中序遍历
function inOrder(root) {
    if (!root) return
    const stack = []
    let p = root
    while (stack.length || p) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        const n = stack.pop()
        console.log(n.val)
        p = n.right
    }
}
//后序遍历
function postOrder(root) {
    if (!root) return
    const outputStack = []
    const stack = [root]
    while (stack.length) {
        const n = stack.pop()
        outputStack.push(n)
        if (n.left) stack.push(n.left)
        if (n.right) stack.push(n.right)
    }
    while (outputStack.length) {
        const n = outputStack.pop()
        console.log(n.val) 
    }
}