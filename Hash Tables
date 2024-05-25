class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for ( let i = 0; i < key.length; i++) {
            hash = ( hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
    //O(1)

    set(key, value) {
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];           
        }
        
        this.data[address].push([key, value]);
        //console.log(this.data[address])
        return this.data;      
    }
    //O(1)

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];

        
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    //O(n)  
    
    keys() {
        const keysArray = new Array();
        for ( let i = 0; i < this.data.length; i ++) {
            //console.log(this.data[i]);
            if(this.data[i]) { 
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}

// _hash : private property that I can't access outside of this class
// developer standard 

const myHashTable = new HashTable(50);
myHashTable.set("grapes",10000);
myHashTable.set("apple",50);
myHashTable.set("orange",2); //shift+alt+downarrow
// console.log(myHashTable.get("grapes")); 
console.log(myHashTable.keys()); 
