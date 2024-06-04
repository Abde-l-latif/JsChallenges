// convert number to reversed array of digits


function convert(number) {
    console.log(number.toString().split("").map((x)=> parseInt(x)).reverse());
}

convert(45263)