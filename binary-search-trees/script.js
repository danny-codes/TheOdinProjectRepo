export {Node, Tree};

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    // insert, search for, delete
    
}

class Tree {
    constructor(array) {
        this.array = array;
        this.root = this.buildTree(array);
    }

    buildTree(array) {
        if (array.length === 0) return null;
        // takes array -> balanced binary tree 
        const midIndex = Math.floor(array.length / 2)
        const midValue = array[midIndex];
        const root = new Node(midValue);
        const leftSide = array.slice(0, midIndex);
        const rightSide = array.slice(midIndex + 1);
    
        root.left = this.buildTree(leftSide);
        root.right = this.buildTree(rightSide);

        return root; 
    }

    includes(value) {
        return this.array.includes(value);
    }
}