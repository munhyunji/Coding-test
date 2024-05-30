
// function bubbleSort(array) {
//     let tmp = 0;
//     for(let i=0; i < array.length; i++) {
//         for(let j=0; j < array.length; j++ ) {
//            if(array[j] > array[j+1]) {
//                 tmp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = tmp;
//            }
//         }
//     }
// }

// bubbleSort(numbers);
// console.log(numbers);


// function selectionSort(array) {
//     let length = array.length;
//     // set current index as minuium;
//      for(let i = 0; i < length; i++) {
//         let min = i;
//         let tmp = array[i];

//         for(let j = i+1; j < length; j++) {
//             //update min if current is lower that what we had previously
//             if(array[j] < array[min]) {
//                 min = j;
//             }
//         }
//         array[i] = array[min];
//      array[min] = tmp;
//      }

//      return array;
// }

// console.log(selectionSort(numbers));

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Insertion Sort

function insertSort(array) {
    let length = array.length;
    for(let i = 0; length; i++) {
       if(array[i] < array[0]) {
        //move number to the first position
        array.unshift(array.splice(i,1)[0]);
       } else {
        //find where number should go
        for(let j = 1; j < i; j++) {
            if(array[i] > array[j-1] && array[i] < array[j]) {
                //move number to the right spot.. 
                array.splice(j,0,array.slice(i,1)[0]);
            }
        }
       }
    }
}

console.log(insertSort(numbers));