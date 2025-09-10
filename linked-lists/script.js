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

    prepend = function(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    
    size = function() {
        let current = this.head;
        let count = 0;
        while (current.nextNode !== null) {
            count++;
            current = current.nextNode;
        }
        console.log('Number of nodes: ' + count);
        return count;
    }

    headNode = function() {
        console.log(this.head);
        return this.head;
    }

    tail = function() {
        if (!this.head) return null;
        let current = this.head;

        while (current.nextNode !== null) {
            current = current.nextCurrent;
        }
        console.log(current);
        return current;
    }

    at = function(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current;
    }

    pop = function() {
        if (!this.head) return;
        if (!this.head.nextNode) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    contains = function(value) {
        let current = this.head;
        // if (current === value) return true;
        while (current !== null) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    find = function(value) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }
        return null;
        
    }

    toString = function() {
        let str = '';
        let current = this.head;
        while (current !== null) {
            str += `( ${current.value} -> )`;
            current = current.nextNode;
        }
        str += 'null';
        return str;
    }
    
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new LinkedList();

list.prepend("animal");
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.size();
list.headNode();
console.log(list.toString());