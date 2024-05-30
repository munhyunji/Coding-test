class BinarySearchTree {
    insert(value) {

    }
    lookup(value) {

    }
    remove(value) {

    }
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = []; //actually list
        let queue = [];
        queue.push(currentNode); //que에 저장

        while(queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value)

            if(currentNode.left) {
                queue.push(currentNode.left);
            }

            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }    
    }

    DFSInOrder() {
        return traverseInOrder(this.root, [])
    }
    DFSPostOrder() {
        return traversePostOrder(this.root, [])
    }
    DFSPreOrder() {
        return traversePreOrder(this.root, [])
    }
}
function traverseInOrder(node, list) {
    //go to the last left node
    if(node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);

    if(node.right) {
        traverseInOrder(node.right, list);
    }
    
    return list;
}

function traversePreOrder(node, list) {
    //go to the last left node
    if(node.left) {
        traversePreOrder(node.left, list);
    }
    

    if(node.right) {
        traversePreOrder(node.right, list);
    }
    list.push(node.value);
    
    return list;
}

