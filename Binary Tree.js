class node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value) {
        const newNode = new node(value);
        if(this.root==null) {
            this.root = newNode;
        } else {
            const currentNode = this.root;
            while (true) {
                if(value < currentNode.value) {
                    //left check
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    } 
                    currentNode = currentNode.left; //stay
                } else {
                    //right check
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this; //stop 
                    }
                    currentNode = currentNode.right;
                }
            }
        }

        return this;
    }

    lookup(value) {
        if(!this.root) {
            return false;
        }
        let currentNode = this.root;
        while(currentNode) {
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right; 
            } else if ( value === currentNode.value) {
                return currentNode;
            }
        }
        return false;
    }

    remove() {
        
    } 
}

const tree = new BinarySearchTree();
tree.insert(9);
JSON.stringify(traverse(tree.root));
//         9
//    4        20
// 1    6   15    170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

