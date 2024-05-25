//Given an array = [2,5,1,2,3,5,1,2,4]
// what's one gets repeated first?
// It shoud return 2

//array

function recurring(input) {
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j <i; j++) {
            if(input[i] == input[j]) {
                return input[i];
            }
        }        
    }
    return undefined;
} //O(n^2)

console.log(recurring([2,5,5,2,3,5,1,2,4]));

//using hash Table


//O(n) 첫번째로 중복되는 숫자를 찾으시오.

function recurringTest(input) {

    const map = {};

    for(let i = 0; input.length; i++) {
        console.log(map);
        if(map[input[i]] != undefined) {
            return input[i];
        } else {
            map[input[i]] = i;
        }

        
    }
}

//console.log(recurringTest([3,5,78,3,7,1,4]));