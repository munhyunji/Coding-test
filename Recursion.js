// let count = 0;

// function inception() {
//     if(count > 3) {
//         return "hello";
//     }

//     count++;
//     return inception(); 
//     // you have to return this fucntion as well. when the last inception returns 'hello'
//     // so you can get returned data;
// }

// console.log(inception());


// Factorial !

// function findFactorialRecursive(number) {   
//     if(number == 1) {
//         return answer;
//     }
//     answer *= number;
//     return findFactorialRecursive(number-1)  // O(n) 
// }

// function  findFactorialIterative(number) {
//     let answer = 1;
//     //start from 2
//     for(let i = 2; i <= number; i++) {
//             answer *= i;       
//     }

//     return answer;
// }


// // console.log(findFactorialRecursive(6));
// console.log(findFactorialIterative(6));


//Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 . . .

function fibonacciIterative(n) { 

}

function fibonacciRecursive(n) { //index
    if(n < 2) {
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}

console.log(fibonacciRecursive(8));