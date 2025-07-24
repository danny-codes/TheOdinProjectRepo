function fibonacci(n) {
    if (n < 2) return n;
    return (fibonacci(n-1)+fibonacci(n-2));
}

function fibonacciIteration(n){
    let total = [];
    for (let i = 1; i <= n; i++) {
        if (i < 2) {
            total.push(i);
        } else {
            let e = (i - 1) + (i - 2);
            total.push(e);
        }
    }
    console.log(total);
}

function fibonacciIteration(n){
    let total = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            total.push(0);
        } else if (i === 1) {
            total.push(1);
        } else {
            let e = total[i - 1] + total[i - 2];
            total.push(e);
        }
    }
    console.log(total);
}

function fibonacciRecursion(n, startN = 0) {
    let array = [];
    if (array.length == n) {
            console.log(array);
        return;
    }
    if (startN === 0) {
        array.push(0);
        fibonacciRecursion(n, startN + 1);
        return;
    } else if (startN === 1) {
        array.push(1);
        fibonacciRecursion(n, startN + 1);
        return;
    }
    array.push((startN - 1) + (startN - 2));
    fibonacciRecursion(n, startN + 1);
};

function fibonacciRecursive(n) {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const arr = fibonacciRecursive(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice[i]).concat(right.slice(j));
}

const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr);