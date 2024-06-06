/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.*/

function solution(number){
    if(number <= 0) {
      return 0
    }
    let arr = []
    let times = 0;
    let three = 3;
    let five = 5;
    for (let i = 1; i < number ; i++) {
        let value = three * i
        if(value < number) {
            times = value
        } else {
            break
        }
        arr.push(times);
    }
    for (let i = 0; i < number ; i++) {
        let valueF = five * i
        if(valueF < number) {
            times = valueF
        } else {
            break
        }
        arr.push(times);
    }
    let array = new Set(arr);
    return Array.from(array).reduce((acc, current)=> {
        return acc + current
    })
}    

  console.log(solution(20))
  console.log(solution(10))



  // solution two 

  function summ(num) {
   
    let sum = 0 ;
    for (let i = 0; i < num ; i++) {
      if(i % 3 == 0 || i % 5 == 0) {
        sum += i
      }
    }
    return sum
  }

  console.log(summ(10))