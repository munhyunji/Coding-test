//Create a function that resveres a string
function reverse(string) {

    const backwords = [];
    const totalItemCount = string.length - 1;

    for(let i = totalItemCount; i >= 0; i--) {
        backwords.push(string[i]);
    }    
       const reversedString = backwords.join("");
    console.log(reversedString);
}

function reverse2(string) {
    return string.split('').reverse().join('');
} 

//reverse("Hi, nice to meet you!");
console.log(reverse2("It's easier way to reverse string"));