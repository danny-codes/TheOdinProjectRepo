function collatz(n) {
    if (n == 1) {
        return 0;
    }
    else if (n % 2 == 0) {
            return 1 + collatz(n/2); 
    }
    else
        return 1 + collatz(3 * n + 1);
}
// pseudocode for Collatz recursion 'problem'


// Recursion practice
function sumRange(n) {
    if (n == 1) {
        return 1;
    }
    return n + sumRange (n - 1);
};

function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    }
    return base * power(base, exponent - 1)
};

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

// function all(array, callback) {
//     let copy = copy || array.slice();

//     if(copy.length === 0) return true;

//     if(callback(copy[0])){
//         copy.shift();
//         return all(copy, callback);
//     } else {
//         return false;
//     }
// }

// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false


function productOfArray(array) {
    if (array.length === 0) return 1
    return array.shift() * productOfArray(array);
};

let six = productOfArray([1,2,3]) // 6
let sixty = productOfArray([1,2,3,10]) // 60

function contains(obj, searchValue) {
    if (typeof obj !== 'object' || obj === null) {
        return obj === searchValue;
    }
    for (const value of Object.values(obj)) {
        if (contains(value, searchValue)) {
            return true;
        }
    }
    return false;
};

function totalInts(array) {
    // if (typeof array !== array || array === null) {
    //     return;
    // }
    if (array.length === 0) return 0;

    let totalNum = 0;
    let first = array.shift();

    if (Array.isArray(first)) {
        total += totalInts(first);
    } else if (Number.isInteger(first)) {
        total += 1;
    }
    return totalNum + totalIntegers(array);

    // for (const value of Array.values(array)) {
    //     if (typeof value == 'number') {
    //         totalNum += 1;
    //         return true;
    //     }
    // }
    // return false;
}

function sumSquares(array) {
    if (array.length === 0) {
        return 0;
    }
    let total = 0;
    // if (Array.isArray(list)) {
    //     let first = list.shift();
    //     for (const val of Array.values(list)) {
    //         return val + sumSquares(val);
    //     }
    // }
    // use for loop
    for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            total += sumSquares(array[i]);
        } else {
            total += array[i] * array[i];
        }
    }
    return total;
}

function repetetionNumberArg(repetitions, numArg) {
    let array = [];
    if (repetitions == 0) {
        return 0;
    }
    if (repetitions == 1) {
        return array.push(numArg);
    }
    for (let i = 0; i < repetitions; i++) {
        array.push(numArg);
    }
    return array;
}