// function addTo80(n) {
//     console.log('long time');
//     return n + 80;
// }

// let cache = {};
// function memoizedAddTo80(n) {
//     if (n in cache) {
//         return cache[n];
//     } else {
//         console.log('long time');
//         cache[n] = n + 80;
//         return cache[n];
    
//     }
// }

// console.log('1', memoizedAddTo80(5));
// console.log('2', memoizedAddTo80(5));

//0, 1, 1, 2, 3, 5, 8, 13, 21,  . . .

let calculation = 0;
function fibonacci(n) {
    calculation++;
    if(n < 2) {
        return n;
    }

    return fibonacci(n-1) + fibonacci(n-2)
}

function fibonacciMaster() {
    let cache = {};
    return function fib(n) {
        if( n in cache) {
            return cache;
        } else {
            if(n < 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2)
            }
            return cache[n];
        }
    }
}
console.log(fibonacci(7));
console.log('c '+ calculation);