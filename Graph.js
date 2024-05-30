class graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++; 
    }
    addEdge(node1, node2) {
        //***undirectied Graph => we have to do edge the other way around ****
        //It's an object [node1] is key
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections() {
        const allNodes = Object.keys
        (this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for ( vertex of nodeConnections) {
                connestions += vertex + " ";
            }
            console.log(node+ "-->" + connections);
        }
    }


}

const myGraph = new graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');

myGraph.showConnections();