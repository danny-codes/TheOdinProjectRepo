class HashMap {
    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }
    hash = function(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }

    getIndex(key) {
        let index = this.hash(key) % this.capacity;
        if (index < 0) index += this.capacity;
        return index;
    }


    // key , value that is assigned to the key
    // overwrite the OLD value if the key already exists
    // collisions occur when TWO DIFFERENT keys generate the same
    // hash code and get assigned to the same bucket
    // 
    setOld(key, value) {
        // make each bucket a linked list
        let currentLoad = this.size / this.capacity;
        let index = this.getIndex(key);
        if (this.buckets[index] === null) {
            this.buckets[index] = [[key, value]];
            this.size++;
        }
        else if (this.buckets[index] != null ) {
            // follow the linked list to add to the end of it
        }
    }

    set(key, value) {
        let index = this.getIndex(key);
        let buдcket = this.buckets[index];

        if (!bucket) {
            this.buckets[index] = [[key], value];
            this.size++;
        } else {
            let found = false;
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket[i][1] = value;
                    found = true;
                    break;
                }
            }
            if (!found) {
                bucket.push([key, value]);
                this.size++;
            }
        }
        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }
    }



    get(key) {
        let index = this.getIndex(key);
        if (this.buckets[index] != null) {
            // return the value that is assigned to the key
            return this.buckets[index][1];
        }
        // if it's not found
        else {
            return null;
        }
    }
    
    has(key) {
        // return true if it's in the hash map, false otherwise
        let index = this.getIndex(key);
        if (this.buckets[index] != null) {
            return true;
        } else {
            return false;
        }
    }

    remove(key) {
        let index = this.getIndex(key);
        if (this.buckets[index] != null) {
            this.buckets[index] = null
            return true;
        } else return false;
    }

    length() {
        // return number of stored keys in the hash map
        let number = 0;
        for (let i = 0; i < this.buckets.length; i++) {
            number++;
        }
        return number;    
    }

    clear() {
        // remove all entries in the hash map
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = null;
        }
    }

    keys() {
        // returns an array containing all the keys inside the hash map
        let arr = [];
        for (let i = 0; i < this.buckets.length; i++) {
            // arr += this.buckets[i][0];
            if (this.buckets[i]) {
                arr.push(this.buckets[i][0]);
            }
            // need to push JUST the key
            // how?????
        }
        return arr;
    }

    values() {
        let arr = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                arr.push(this.buckets[i][1]);
            }
        }
        return arr;
    } // returns an array containing all the values.

    entries() {
        let arr = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                arr.push([this.buckets[i][0], this.buckets[i][1]]);
            }
        }
        return arr;
    } //returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]

}

// an example using parameters, namely: loadFactor and capacity
let map = new HashMap(0.75, 12);
map.set('Carlos', 'This is the value.');
map.set('Ace', 'Different value.');
map.get('Carlos');