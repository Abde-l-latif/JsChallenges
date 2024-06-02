// you get an array of numbers, return the sum of all of the positives ones.


function positiveSum(arr) {
    let number = 0;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i]> 0) {
            number += arr[i];
        }
    }
    return number
}

console.log(positiveSum([5, 6, -4, 8]));


// other way : lets do it with "higher order functions" reduce and filter with arrow function method
function positiveSumTwo(arr) {
   return arr.filter((x) => x > 0)
   .reduce((acc, curr)=> acc + curr)
}

console.log(positiveSumTwo([1, 2, -5, 6]));