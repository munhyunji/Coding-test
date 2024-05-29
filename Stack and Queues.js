// class newNode {
//     constructor(value) {
//         this.value = value,
//         this.next = null; 
//     }
// }

// class stack {
//     constructor() {
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }
//     //first one
//     peek() {
//         return this.top;
//     }
//     //insert
//     push(value){
//         const newNode = {
//             value : value,
//             next : null
//         }
//         if(this.length == 0) { //nothing in the stack.
//             this.top = newNode;
//             this.bottom = newNode;
//         } else {
//             const holdingPointer = this.top; // before top
//             this.top = newNode; //stack
//             this.top.next = holdingPointer; //stack below
//         }

//         this.length++;
//         return this;
//     }
//     //top delete 
//     pop(){
//         if(this.length == 0) {
//             return null;    
//         } else {
//             //const holdingPointer = this.top;
//             this.top = this.top.next;
//             this.length--;
//             return this;
//         }
//     }
// }

// const myStack = new stack();
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('naver');
// myStack.pop('naver');
// console.log(myStack);


// //--------------------------------------------ToArray


// class stack {
//     constructor() {
//         this.array = [];
//     }
//     //first one
//     peek() {
//         return this.array[this.array.length-1];
//     }
//     //insert
//     push(value){      
//          this.array.push(value);
//         return this.array;
//     }
//     //top delete 
//     pop(){
//         if(this.length == 0) {
//             return null;    
//         } else {
//             this.array.pop();
//         }

//         return this;
//     }
// }

// const myStack = new stack();
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('naver');
// myStack.pop();
// myStack.pop();
// console.log(myStack.array);

//--------------------------Queues


class Queue {
    constructor(value) {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }
    enqueue(value){
        const newNode = {
            value : value,
            next : null
        }

        if(this.length == 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){
        if(this.first == this.last) {
            return null;
        }

        this.first = this.first.next;
        this.length--;
        return this;
    }

}


const myQueue = new Queue();

myQueue.enqueue("google");
myQueue.enqueue("udey");
myQueue.enqueue("nasn");
myQueue.dequeue();
console.log(myQueue);