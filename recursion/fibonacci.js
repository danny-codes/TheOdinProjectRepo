// input of 8, this function should return
// the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibonacci(n) {
    if (n < 2) return n;
    return (fibonacci(n-1)+fibonacci(n-2));
}

function fibonacciIteration(n){
    // get n numbers of fibonacci sequence & return 'em
    // need a way to get fibonacci numbers

    // and do that WAY in a loop for n times.
    // to do it for n times just use for loop
    // initialize a counter variable and
    // i =< n and i++
    // so the next step should be an operation
    // or the {} content
    let total = [];
    for (let i = 1; i <= n; i++) {
        // expression here
        if (i < 2) {
            total.push(i);
            // return i;
        } else {
            let e = (i - 1) + (i - 2);
            total.push(e);
        // return e;
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
    //base cases?
    // if (startN === n) {
    //     console.log(array);
    //     return;
    // }
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
    // } else {
    //     array.push((startN - 1) + (startN - 2));
    // }
    // return fibonacciRecursion(n, startN + 1);
    array.push((startN - 1) + (startN - 2));
    fibonacciRecursion(n, startN + 1);
    // try to use startN for accessing array's indexes
};

// function fibonacciRecursive(n, startN = 0, arr) {
//     let array = [];
//     if (array.length == n) {
//         console.log(array);
//         return;
//     }
//     if (startN === 0) {
//         array.push(0);
//         fibonacciRecursive(n, startN + 1, array);
//         // return;
//     } 
//     if (startN === 1) {
//         array.push(1);
//         fibonacciRecursive(n, startN + 1, array);
//         // return;
//     }
//     let fibArrVal = array[startN - 1] + array[startN - 2];
//     array.push(fibArrVal);
//     return fibonacciRecursive(n, startN + 1, array);
// }

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
    if (arr.length == 0 || arr.length == 1) {
        return arr;
    }
    // let middleIndex = Math.floor((startIndex + endIndex) / 2);
    mid = arr.length / 2;
    left = mergeSort(arr[:mid]);
    right = mergeSort(arr[mid:]);
    return merge(left, right);
}

function merge(left, right) {
    let merged = [];
    i = j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right [j]) {
            merged.push(left[i]);
            i += 1;
        } else {
            merged.push(right[j]);
            j += 1;
        }
    }
    merged.push(left[i:]);
    merged.push(right[j:]);

    return merged;
}

function factorial(targetN) {
    if (targetN <= 1) return 1;
    else return targetN * factorial(targetN - 1);
}

// function fibonacciRecursion(n, i){
//     i = 0;
//     let total = [];
//     if (total.length == n) {
//         return;
//     }
//     if (i === 0) {
//         total.push(0);
//     } else if (i === 1) {
//         total.push(1);
//     }
//     let e = total[i - 1] + total[i - 2];
//     total.push(e);
//     console.log('this run');
//     console.log(total);
//     return n + fibonacciRecursion(n, i+1);
// }