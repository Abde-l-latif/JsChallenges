// doing a function that do the same job as "repeatStr()" it repeats string by giving it a number and string you wanna repeat


function repeatString(number, string) {
    let str = "";
    for (let i = 0; i < number; i++) {
        str += string
    }
    console.log(str)
}

repeatString(5, " hooowii ");

// second way to do it

function a(n, s) {
    return s.repeat(n)
} 

console.log(a(4, " yaho "));