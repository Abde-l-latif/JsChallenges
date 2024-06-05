/* Your task is to make a function that can take any non-negative integer as 
an argument and return it with its digits in descending order. Essentially,
 rearrange the digits to create the highest possible number. */


function descendingOrder(n){
    let arrayNum = n.toString().split("").map((e)=> parseInt(e)).sort((a, b) => b - a).join("");
    return parseInt(arrayNum)
}

console.log(descendingOrder(10549));

//output is 95410
