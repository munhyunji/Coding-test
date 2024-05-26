class newNode {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value : value,
            next : null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value) { //node는 head에 붙이는게 아니라 tail에 붙임
        //add nodes
       const newNode = {
            value : value,
            next : null
       }

       this.tail.next = newNode;  // set newNode as a new node.    
        //    this.tail = {
        //         value : value,
        //         next : newNode
        //    }
        
        this.tail = newNode; // update a new node. 
        //this.tail = newNode로 생성

        this.length++;

        return this;
    }
    //add 1 to head
    prepend(value) {

        const newNode = {
            value : value,
            next : null
       }

       newNode.next = this.head;
       this.head = newNode;
       this.length++;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    insert(index, value) {
        if(index >= this.length) { //현재 노드보다  인덱스가 크면 뒤에붙여
            return this.append(value);
        }

        const newNode = {
            value : value,
            next : null
        }

        const leader = this.traversalToIndex(index-1) // 앞의 인덱스값을 찾음
        const holdingPointer = leader.next; //인덱스 이후 노드

        leader.next = newNode; // 앞노드와 연결
        newNode.next = holdingPointer; //뒷노드와 연결 

        this.length++;
        return this.printList();
    }

    //노드횡단하여 counter변수로 인덱스의 위치를 찾아냄 
    traversalToIndex(index) {
        //check params
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        //d
        const leader = this.traversalToIndex(index-1); //이전 노드 
        const currentNode = leader.next; //지우려는 노드 
        
        //중간에있는 삭제할 노드의 연결을 끊음
        leader.next = currentNode.next;
        this.length--;

        return this.printList();   
    }
}

// this.tail.next = this.head.next (pointer) 값에 newNode의 값에 붙음 
// 

let mylinkedList = new LinkedList(10);
mylinkedList.append(5);
mylinkedList.append(17);
mylinkedList.prepend(44);
mylinkedList.insert(2, 99);
mylinkedList.remove(3);
console.log(mylinkedList.printList());