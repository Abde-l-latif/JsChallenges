
// sum numbers excepte the great and less once and if array is impty return 0  

function a(array) {
    if (array == null) {
        return 0
    } else {
        return array.sort((a, b)=> a - b).slice(0, -1).reduce((acc, current)=> acc + current)
    }
} 


console.log(a([1, 8, 10, 1, 2, 3, 5, 10, 20]));