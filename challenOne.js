// challege one : return a function that returns even for even numbers and odd for odd numbers

// if statment 

function typeNum(num) {
    if (num % 2) {
        console.log(`${num} is odd`);
    } else {
        console.log(`${num} is even`);
    }
}

typeNum(1805);

// ternery operator

function evenOdd(num) {
    num % 2 ? console.log(`${num} is odd`) : 
    console.log(`${num} is even`);
}

evenOdd(5);