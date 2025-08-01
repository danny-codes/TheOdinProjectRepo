class LinkedList {
    constructor() {
        this.head = null;
    }
    append = function(value) {
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }
    // prepend = function (value) {
    //     let newNode = new Node(value);

    // }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
